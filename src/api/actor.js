import apiClient from "./apiClient";

export const applyForRole = async (roleDetails) => {
  const response = await apiClient.post("/actors/apply", roleDetails);
  return response.data;
};
