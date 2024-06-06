import React, { useState } from "react";
import { applyForProject } from "../../api/director";
import ProcessPayment from "../Payment/ProcessPayment";
import "./Director.css";

const ApplyForProject = () => {
  const [projectName, setProjectName] = useState("");
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
      await applyForProject({ projectName, userId });
      alert("Applied for project");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="director-container">
      <h2>Apply for Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Project Name</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
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

export default ApplyForProject;
