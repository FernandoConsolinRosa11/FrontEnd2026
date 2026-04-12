import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../../services/userService";
import type { UserData } from "../../../types/types";

export const useUserProfile = (id: string | undefined) => {
  const [notification, setNotification] = useState<{
    message: string;
    variant: "success" | "error";
  } | null>(null);
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeModal, setActiveModal] = useState<"password" | "phone" | null>(
    null,
  );

  const fetchUserProfile = useCallback(async () => {
    if (!id || id === ":id" || id === "undefined") return;
    try {
      const data = await userService.getProfile(id);
      setUserData(data.user ?? data);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  const handleUpdate = async (
    field: keyof UserData | "password",
    value: string,
  ) => {
    try {
      const updatedUser = await userService.updateProfile(id!, {
        [field]: value,
      });
      setUserData(updatedUser);
      setActiveModal(null);
      setNotification({
        message: "Perfil atualizado com sucesso!",
        variant: "success",
      });
    } catch (err) {
      setNotification({
        message: err instanceof Error ? err.message : "Erro ao atualizar.",
        variant: "error",
      });
    }
  };

  const handleDelete = async () => {
    if (!id) return;
    try {
      await userService.deleteProfile(id);
      localStorage.removeItem("token");
      navigate("/login");
    } catch (err) {
      setNotification({
        message: "Erro ao desativar perfil.",
        variant: "error",
      });
    }
  };

  return {
    userData,
    isLoading,
    activeModal,
    setActiveModal,
    handleUpdate,
    handleDelete,
    notification,
    setNotification,
  };
};
