import axios from "axios";

const API_URL = "http://localhost:3000";

interface UserUpdateData {
  [key: string]: unknown; 
}

export const userService = {
  getProfile: async (id: string) => {
    if (!id || id === "undefined") {
      throw new Error("ID do usuário não fornecido");
    }
    try {
      const response = await axios.get(`${API_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao buscar dados do servidor");
    }
  },

  updateProfile: async (id: string, data: UserUpdateData) => {
    if (!id || id === "undefined") {
      throw new Error("ID do usuário inválido para atualização");
    }
    try {
      const response = await axios.patch(`${API_URL}/users/${id}`, data);
      return response.data;
    } catch (error: unknown) {

      let message = "Erro ao atualizar dados no servidor";
      
      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || message;
      }
      
      throw new Error(message);
    }
  },
};