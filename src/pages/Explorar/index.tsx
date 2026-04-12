import { useEffect, useState, useContext } from "react";
import Carrossel from "./components/CarroselMarca";
import CardCarro from "./components/CardCarros";
import SideBar from "./components/SideBar";
import Notification from "../../components/Notification";
import { AuthContext } from "../../contexts/authContext";
import { authStorage } from "../../utils/userLocalStorage";
import { favoriteService } from "../../services/favoriteService";
import type { CardCarProps } from "../../types/types";

export default function Explorar() {
  const [cars, setCars] = useState<CardCarProps[]>([]);
  const [marcaSelecionada, setMarcaSelecionada] = useState("Todos");
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [notification, setNotification] = useState<{
    message: string;
    variant: "success" | "error";
  } | null>(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch("http://localhost:3000/cars");
        const data = await res.json();

        setCars(data);
      } catch (err) {
        console.error("Erro ao buscar carros:", err);
      }
    }

    fetchCars();
  }, []);

  useEffect(() => {
    const loadFavorites = async () => {
      const activeUser = user || authStorage.getUser();
      if (!activeUser?.id) {
        setFavoriteIds([]);
        return;
      }

      try {
        const favorites = await favoriteService.getByUser(activeUser.id);
        setFavoriteIds(favorites.map((favorite: any) => favorite.carId));
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
        setFavoriteIds([]);
      }
    };

    loadFavorites();
  }, [user]);

  const carsFiltrados =
    marcaSelecionada === "Todos"
      ? cars
      : cars.filter((carro) => carro.brand === marcaSelecionada);

  const handleDismissNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(null), 3200);
    return () => clearTimeout(timer);
  }, [notification]);

  const handleToggleFavorite = async (carId: string) => {
    const activeUser = user || authStorage.getUser();
    if (!activeUser?.id) {
      setNotification({
        message: "Faça login para adicionar aos favoritos.",
        variant: "error",
      });
      return;
    }

    try {
      const isNowFavorited = !favoriteIds.includes(carId);
      await favoriteService.toggle({ userId: activeUser.id, carId });
      setFavoriteIds((prev) =>
        isNowFavorited ? [...prev, carId] : prev.filter((id) => id !== carId),
      );
      setNotification({
        message: isNowFavorited
          ? "Carro adicionado aos favoritos."
          : "Carro removido dos favoritos.",
        variant: "success",
      });
    } catch (error) {
      console.error("Erro ao alternar favorito:", error);
      setNotification({
        message: "Não foi possível atualizar o favorito.",
        variant: "error",
      });
    }
  };

  return (
    <div>
      {notification ? (
        <Notification
          message={notification.message}
          variant={notification.variant}
          onClose={handleDismissNotification}
        />
      ) : null}

      <div className="w-full">
        <Carrossel onChangeMarca={setMarcaSelecionada} />
      </div>

      <div className="w-full flex">
        <SideBar />

        <div className="w-full px-8">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-4">
            {carsFiltrados.map((carro) => (
              <CardCarro
                key={carro.id}
                carro={carro}
                isFavorited={favoriteIds.includes(carro.id)}
                onToggleFavorite={() => handleToggleFavorite(carro.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
