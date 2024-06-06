import apiClient from "./apiClient";

export const submitStory = async (formData) => {
  const response = await apiClient.post("/stories/submit", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
