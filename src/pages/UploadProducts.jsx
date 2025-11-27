import React from "react";
import { uploadAllProducts } from "../utils/uploadProducts";

export default function UploadProducts() {
  const handleUpload = async () => {
    await uploadAllProducts();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload All Products to Firestore</h2>
      <button
        onClick={handleUpload}
        style={{
          padding: "12px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Upload Products
      </button>
    </div>
  );
}
