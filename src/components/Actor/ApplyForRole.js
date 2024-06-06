import React, { useState } from "react";
import { applyForRole } from "../../api/actor";
import ProcessPayment from "../Payment/ProcessPayment";
import "./Actor.css";

const ApplyForRole = () => {
  const [roleName, setRoleName] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const userId = localStorage.getItem("userId");

  const handlePaymentSuccess = () => {
    setIsPaid(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isPaid) {
      alert("Please complete the payment first");
      return;
    }
    try {
      await applyForRole({ roleName, userId });
      alert("Applied for role");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="actor-container">
      <h2>Apply for Role</h2>
      <form onSubmit={handleSubmit}>
        <label>Role Name</label>
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          required
        />
        <ProcessPayment
          userId={userId}
          amount={10000}
          onSuccess={handlePaymentSuccess}
        />
        <button type="submit" disabled={!isPaid}>
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyForRole;
