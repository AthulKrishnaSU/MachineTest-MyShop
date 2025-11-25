import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function PaymentGateway() {
  const nav = useNavigate();
  const { total } = useCart();
  const [selectedMethod, setSelectedMethod] = useState("credit-card");
  const [selectedUPI, setSelectedUPI] = useState("");

  const payNow = () => {
    if (selectedMethod === "razorpay") {
      // Razorpay options removed to fix ESLint unused variable warning
      // (Netlify build error)
      // Razorpay popup simulation kept

      setTimeout(() => {
        nav("/order-confirmation");
      }, 1000);
    } else {
      setTimeout(() => {
        nav("/order-confirmation");
      }, 800);
    }
  };

  const getMethodStyle = (method) => ({
    padding: "15px",
    border: selectedMethod === method ? "2px solid #007185" : "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: selectedMethod === method ? "#F0F2F2" : "#fff",
    textAlign: "center",
    minWidth: "120px",
    cursor: "pointer",
    transition: "all 0.2s",
    transform: selectedMethod === method ? "scale(1.02)" : "scale(1)",
  });

  const getUPIStyle = (upiMethod) => ({
    padding: "12px",
    border: selectedUPI === upiMethod ? "2px solid #007185" : "1px solid #ddd",
    borderRadius: "6px",
    backgroundColor: selectedUPI === upiMethod ? "#F0F2F2" : "#fff",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.2s",
    flex: "1",
    minWidth: "80px",
  });

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
          borderBottom: "1px solid #ddd",
          paddingBottom: "10px",
          textAlign: "center",
        }}
      >
        Demo Payment Gateway
      </div>

      {/* Payment Summary */}
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "25px",
          marginBottom: "25px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#0F1111",
            marginBottom: "15px",
          }}
        >
          Order Summary
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "300px",
            margin: "0 auto 20px",
            padding: "15px",
            backgroundColor: "#F0F2F2",
            borderRadius: "6px",
          }}
        >
          <span style={{ fontSize: "16px", color: "#0F1111" }}>
            Amount to Pay:
          </span>
          <span
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#B12704",
            }}
          >
            ₹{total}
          </span>
        </div>

        {/* Security Info */}
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#F0F2F2",
            borderRadius: "6px",
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#0F1111",
              marginBottom: "10px",
            }}
          >
            Secure Payment
          </div>
          <div style={{ fontSize: "14px", color: "#565959", lineHeight: 1.5 }}>
            • Your payment information is encrypted  
            • This is a demo gateway  
            • No actual payment will be processed  
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "25px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#0F1111",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Select Payment Method
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <div
            style={getMethodStyle("credit-card")}
            onClick={() => setSelectedMethod("credit-card")}
          >
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>
              💳 Credit Card
            </div>
          </div>

          <div
            style={getMethodStyle("debit-card")}
            onClick={() => setSelectedMethod("debit-card")}
          >
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>
              💳 Debit Card
            </div>
          </div>

          <div
            style={getMethodStyle("upi")}
            onClick={() => setSelectedMethod("upi")}
          >
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>📱 UPI</div>
          </div>

          <div
            style={getMethodStyle("net-banking")}
            onClick={() => setSelectedMethod("net-banking")}
          >
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>
              🏦 Net Banking
            </div>
          </div>

          <div
            style={getMethodStyle("razorpay")}
            onClick={() => setSelectedMethod("razorpay")}
          >
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>
              ⚡ Razorpay
            </div>
          </div>
        </div>

        {/* UPI Options */}
        {selectedMethod === "upi" && (
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              border: "1px solid #eee",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "15px",
                textAlign: "center",
              }}
            >
              Select UPI App
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {["gpay", "phonepay", "paytm", "other"].map((upi) => (
                <div
                  key={upi}
                  style={getUPIStyle(upi)}
                  onClick={() => setSelectedUPI(upi)}
                >
                  <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                    {upi === "gpay"
                      ? "GPay"
                      : upi === "phonepay"
                      ? "PhonePe"
                      : upi === "paytm"
                      ? "Paytm"
                      : "Other UPI"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selected Display */}
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#E3F2FD",
            borderRadius: "6px",
            textAlign: "center",
          }}
        >
          <strong>Selected:</strong>{" "}
          {selectedMethod === "upi"
            ? `UPI - ${selectedUPI || "Select UPI App"}`
            : selectedMethod
                .replace("-", " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
        </div>
      </div>

      {/* Pay Button */}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={payNow}
          disabled={!selectedMethod || (selectedMethod === "upi" && !selectedUPI)}
          style={{
            padding: "15px 60px",
            backgroundColor: selectedMethod ? "#FFD814" : "#ccc",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: selectedMethod ? "pointer" : "not-allowed",
          }}
        >
          {selectedMethod === "razorpay"
            ? "Pay with Razorpay"
            : "Pay Securely"}{" "}
          - ₹{total}
        </button>
      </div>

      {/* Security Badges */}
      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
          padding: "15px",
          borderTop: "1px solid #eee",
        }}
      >
        <div style={{ fontSize: "12px", marginBottom: "10px" }}>
          <strong>100% Secure Payment</strong>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            fontSize: "10px",
          }}
        >
          <span>🔒 SSL Encrypted</span>
          <span>🛡️ PCI DSS Compliant</span>
          <span>✅ RBI Approved</span>
        </div>
      </div>
    </div>
  );
}
