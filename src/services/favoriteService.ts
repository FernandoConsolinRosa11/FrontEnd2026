import type { FavoriteData } from "../types/types";
import api  from "./api";

export const favoriteService = {
  getByUser: async (userId: string) => {
    const response = await api.get(`/favorites/${userId}`);
    return response.data;
  },

  // Adiciona ou remove (Toggle) um favorito
  toggle: async (data: FavoriteData) => {
    const response = await api.post("/favorites/toggle", data);
    return response.data;
  }
};