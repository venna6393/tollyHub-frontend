import React, { useState } from "react";
import { submitMusic } from "../../api/music";
import ProcessPayment from "../Payment/ProcessPayment";
import "./Music.css";

const SubmitMusic = () => {
  const [musicFile, setMusicFile] = useState(null);
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
      formData.append("musicFile", musicFile);
      await submitMusic(formData);
      alert("Music submitted for review");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="music-container">
      <h2>Submit Music</h2>
      <form onSubmit={handleSubmit}>
        <label>Upload Music</label>
        <input
          type="file"
          onChange={(e) => setMusicFile(e.target.files[0])}
          required
        />
        <ProcessPayment
          userId={userId}
          amount={10000}
          onSuccess={handlePaymentSuccess}
        />
        <button type="submit" disabled={!isPaid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitMusic;
