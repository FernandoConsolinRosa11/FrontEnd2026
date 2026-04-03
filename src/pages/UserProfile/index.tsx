import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userService } from "../../services/userService";
import { Modal } from "./components/modal";
import { EditFieldForm } from "./components/editFieldForm";
import type { UserData } from "../../types/types";
import Button from "../../components/Button";
import InfoRow from "./components/infoRow";

const UserProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [activeModal, setActiveModal] = useState<"password" | "phone" | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserProfile = useCallback(async () => {
    if (!id || id === ":id" || id === "undefined") return;

    try {
      const data = await userService.getProfile(id);
      const profileData = data.user ?? data;
      setUserData(profileData);
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  // 2. Handler único de atualização
  const handleUpdate = async (
    field: keyof UserData | "password",
    value: string,
  ) => {
    try {
      const updatedUser = await userService.updateProfile(id!, {
        [field]: value,
      });

      // Atualiza o estado apenas se a API retornar sucesso
      setUserData(updatedUser);
      setActiveModal(null);
      console.log(`${field} atualizado com sucesso!`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Erro ao atualizar.";
      alert(msg);
      console.error("Erro capturado:", err);
    }
  };

const handleDelete = async () => {
  if (!id || !window.confirm("Deseja desativar seu perfil?")) return;
  try {
    await userService.deleteProfile(id); // Chama a API
    localStorage.removeItem("token");
    alert("Perfil desativado com sucesso.");
    navigate("/login"); // Redireciona
  } catch (err) {
    alert("Erro ao desativar perfil.");
    console.log(err);
    
  }
};
  if (isLoading) {
    return (
      <div className="bg-[#121212] min-h-screen flex items-center justify-center text-gray-500 tracking-widest uppercase">
        Carregando Perfil...
      </div>
    );
  }

  return (
    <div className="bg-[#121212] text-white font-sans  py-20! ">
      <div className="max-w-5xl mx-auto px-4 ">
        <header className="mb-8 pb-2 ">
          <h1 className="text-2xl font-light tracking-widest uppercase border-l-4 pl-2! border-[#C59958]">
            Meu Perfil
          </h1>
        </header>

        <main className="border border-gray-700 p-1 bg-[#12121269]">
          <section className="p-6 border-b border-gray-800">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block mb-1">
              Usuário
            </span>
            <h2 className="text-3xl italic font-semibold tracking-tight">
              {userData?.name}
            </h2>
          </section>

          <div className="p-6 space-y-4">
            <InfoRow label="Email" value={userData?.email || ""} />
            <InfoRow
              label="Senha"
              value="••••••••••••••"
              onEdit={() => setActiveModal("password")}
            />
            <InfoRow label="CEP" value={userData?.cep || ""} />
            <InfoRow label="CPF" value={userData?.cpf || ""} />
            <InfoRow
              label="Telefone"
              value={userData?.number || ""}
              onEdit={() => setActiveModal("phone")}
            />
          </div>
        </main>
        <Button
          texto="Deletar Perfil"
          className="hover:text-red-700 my-1"
          onClick={handleDelete}
        />
      </div>

      <Modal isOpen={activeModal !== null} onClose={() => setActiveModal(null)}>
        <h3 className="text-xl tracking-[0.2em] uppercase mb-8 font-light text-white">
          {activeModal === "password" ? "Segurança" : "Contato"}
        </h3>

        <EditFieldForm
          config={{
            label: activeModal === "password" ? "Nova Senha" : "Novo Telefone",
            type: activeModal === "password" ? "password" : "text",
            defaultValue: activeModal === "phone" ? userData?.number : "",
            maxLength: activeModal === "phone" ? 13 : 20,
          }}
          onSave={(val) =>
            handleUpdate(
              activeModal === "password" ? "password" : "number",
              val,
            )
          }
        />
      </Modal>
    </div>
  );
};

export default UserProfile;
