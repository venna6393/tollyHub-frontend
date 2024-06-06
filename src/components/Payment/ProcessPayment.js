import React from "react";
import { processPayment } from "../../api/payment";
import "./Payment.css";

const ProcessPayment = ({ userId, amount, onSuccess }) => {
  const handlePayment = async () => {
    try {
      const response = await processPayment({ userId, amount });
      if (response.success) {
        onSuccess();
      } else {
        alert("Payment failed");
      }
    } catch (err) {
      console.error(err);
      alert("Payment processing error");
    }
  };

  return (
    <div className="payment-container">
      <button onClick={handlePayment}>Pay {amount} INR</button>
    </div>
  );
};

export default ProcessPayment;
