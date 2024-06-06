import apiClient from "./apiClient";

export const submitMusic = async (formData) => {
  const response = await apiClient.post("/music/submit", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
