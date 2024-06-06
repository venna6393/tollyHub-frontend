import apiClient from "./apiClient";

export const login = async (credentials) => {
  const response = await apiClient.post("/auth/login", credentials);
  return response.data;
};

export const register = async (details) => {
  const response = await apiClient.post("/auth/register", details);
  return response.data;
};
