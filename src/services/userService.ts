import axios from "axios";

export const userService = {
  getProfile: async (id: string) => {
    if (!id || id === "undefined") {
      throw new Error("ID do usuário não fornecido");
    }
    try {
      const response = await axios.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar dados do servidor");
    }
  }
};