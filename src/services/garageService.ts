import api from "./api";

const getUserProposals = async (userId: string) => {
  const response = await api.get(`/Garage/${userId}`);
  return response.data;
};

const sendCarProposal = async (payload: any) => {
  const response = await api.post("/Garage", payload);
  return response.data;
};

const garageService = {
  getUserProposals,
  sendCarProposal,
};

export default garageService;
