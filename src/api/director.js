import apiClient from "./apiClient";

export const applyForProject = async (projectDetails) => {
  const response = await apiClient.post("/directors/apply", projectDetails);
  return response.data;
};
