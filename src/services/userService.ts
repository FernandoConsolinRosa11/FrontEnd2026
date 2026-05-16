import axios from "axios";

import api from "./api";

const API_URL = "http://localhost:3000";

type UserUpdateData = Partial<Record<string, unknown>>;

export const userService = {
  getProfile: async (id: string) => {
    if (!id || id === "undefined") {
      throw new Error("ID do usuário não fornecido");
    }

    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(`${API_URL}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao buscar dados do servidor");
    }
  },
  updateProfile: async (id: string, data: UserUpdateData) => {
    const token = localStorage.getItem("token");
    if (!id || id === "undefined") {
      throw new Error("ID do usuário inválido para atualização");
    }
    if (!data || Object.keys(data).length === 0) {
      throw new Error("Nenhum dado fornecido para atualização");
    }

    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([, value]) => value !== undefined),
    );

    try {
      const response = await axios.patch(
        `${API_URL}/users/${id}`,
        filteredData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error: unknown) {
      let message = "Erro ao atualizar dados no servidor";

      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || message;
      }

      throw new Error(message);
    }
  },

  deleteProfile: (id: string) => api.delete(`/users/${id}`),
};
