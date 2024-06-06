import apiClient from "./apiClient";

export const processPayment = async (paymentDetails) => {
  const response = await apiClient.post("/payments/process", paymentDetails);
  return response.data;
};
