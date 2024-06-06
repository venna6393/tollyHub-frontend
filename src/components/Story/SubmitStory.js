import React, { useState } from "react";
import { submitStory } from "../../api/story";
import ProcessPayment from "../Payment/ProcessPayment";
import "./Story.css";

const SubmitStory = () => {
  const [storyName, setStoryName] = useState("");
  const [writerName, setWriterName] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
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
      const formData = new FormData();
      formData.append("storyName", storyName);
      formData.append("writerName", writerName);
      formData.append("pdfFile", pdfFile);
      await submitStory(formData);
      alert("Story submitted for review");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="story-container">
      <h2>Submit Story</h2>
      <form onSubmit={handleSubmit}>
        <label>Story Name</label>
        <input
          type="text"
          value={storyName}
          onChange={(e) => setStoryName(e.target.value)}
          required
        />
        <label>Writer Name</label>
        <input
          type="text"
          value={writerName}
          onChange={(e) => setWriterName(e.target.value)}
          required
        />
        <label>Upload PDF</label>
        <input
          type="file"
          onChange={(e) => setPdfFile(e.target.files[0])}
          required
        />
        <ProcessPayment
          userId={userId}
          amount={5000}
          onSuccess={handlePaymentSuccess}
        />
        <button type="submit" disabled={!isPaid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitStory;
