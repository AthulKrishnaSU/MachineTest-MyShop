import React from "react";
import { uploadAllOrders } from "../utils/uploadOrders";

export default function UploadOrders() {
  const handleUpload = async () => {
    await uploadAllOrders();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Orders to Firestore</h2>
      <button
        onClick={handleUpload}
        style={{
          padding: "12px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Upload Orders
      </button>
    </div>
  );
}
