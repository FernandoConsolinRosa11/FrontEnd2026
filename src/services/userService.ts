import api from "./api";

export const userService = {
  getProfile: async (id: string) => {
    try {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar dados do servidor");
    }
  }
};