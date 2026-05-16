import type { GarageProposalPayload } from "../types/types";
import api from "./api";

export interface UpdateProposalPayload {
  offeredValue: number;
  message: string;
}

const garageService = {
  getUserProposals: async (userId: string) => {
    const response = await api.get(`/Garage/${userId}`);
    return response.data;
  },

  sendCarProposal: async (payload: GarageProposalPayload) => {
    const response = await api.post("/Garage/proposals", payload);
    return response.data;
  },

  updateCarProposal: async (
    proposalId: string,
    payload: UpdateProposalPayload,
  ) => {
    const response = await api.put(`/Garage/${proposalId}`, payload);
    return response.data;
  },

  deleteCarProposal: async (proposalId: string) => {
    const response = await api.delete(`/Garage/${proposalId}`);
    return response.data;
  },
};

export default garageService;