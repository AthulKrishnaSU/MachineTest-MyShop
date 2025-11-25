import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function PaymentGateway(){
  const nav = useNavigate();
  const { total } = useCart();
  const [selectedMethod, setSelectedMethod] = useState("credit-card");
  const [selectedUPI, setSelectedUPI] = useState("");

  const payNow = () => {
    if (selectedMethod === "razorpay") {
      // Demo Razorpay integration
      const options = {
        key: "rzp_test_YOUR_KEY_HERE", // Demo key
        amount: total * 100, // Amount in paise
        currency: "INR",
        name: "My-Shop",
        description: "Test Transaction",
        handler: function(response) {
          console.log("Payment successful:", response);
          nav("/order-confirmation");
        },
        prefill: {
          name: "Demo User",
          email: "demo@myshop.com",
          contact: "9999999999"
        },
        theme: {
          color: "#3399cc"
        }
      };
      
      // Simulate Razorpay payment popup
      setTimeout(() => {
        nav("/order-confirmation");
      }, 1000);
      
    } else {
      // Normal payment flow
      setTimeout(() => {
        nav("/order-confirmation");
      }, 800);
    }
  };

  const getMethodStyle = (method) => ({
    padding: '15px',
    border: selectedMethod === method ? '2px solid #007185' : '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: selectedMethod === method ? '#F0F2F2' : '#fff',
    textAlign: 'center',
    minWidth: '120px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    transform: selectedMethod === method ? 'scale(1.02)' : 'scale(1)'
  });

  const getUPIStyle = (upiMethod) => ({
    padding: '12px',
    border: selectedUPI === upiMethod ? '2px solid #007185' : '1px solid #ddd',
    borderRadius: '6px',
    backgroundColor: selectedUPI === upiMethod ? '#F0F2F2' : '#fff',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s',
    flex: '1',
    minWidth: '80px'
  });

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '20px',
        borderBottom: '1px solid #ddd',
        paddingBottom: '10px',
        textAlign: 'center'
      }}>
        Demo Payment Gateway
      </div>

      {/* Payment Summary Card */}
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '25px',
        marginBottom: '25px',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#0F1111',
          marginBottom: '15px'
        }}>
          Order Summary
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '300px',
          margin: '0 auto 20px',
          padding: '15px',
          backgroundColor: '#F0F2F2',
          borderRadius: '6px'
        }}>
          <span style={{ 
            fontSize: '16px', 
            color: '#0F1111'
          }}>
            Amount to Pay:
          </span>
          <span style={{ 
            fontSize: '24px', 
            fontWeight: 'bold',
            color: '#B12704'
          }}>
            ₹{total}
          </span>
        </div>

        {/* Payment Security Info */}
        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#F0F2F2',
          borderRadius: '6px',
          textAlign: 'left'
        }}>
          <div style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#0F1111',
            marginBottom: '10px'
          }}>
            Secure Payment
          </div>
          <div style={{
            fontSize: '14px',
            color: '#565959',
            lineHeight: '1.5'
          }}>
            • Your payment information is encrypted and secure<br/>
            • This is a demo payment gateway for testing purposes<br/>
            • No actual payment will be processed
          </div>
        </div>
      </div>

      {/* Payment Method Options */}
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '25px',
        marginBottom: '25px'
      }}>
        <div style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#0F1111',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Select Payment Method
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          flexWrap: 'wrap',
          marginBottom: '20px'
        }}>
          {/* Credit Card Option */}
          <div 
            style={getMethodStyle("credit-card")}
            onClick={() => setSelectedMethod("credit-card")}
            onMouseOver={(e) => e.target.style.backgroundColor = selectedMethod === "credit-card" ? '#F0F2F2' : '#f8f8f8'}
            onMouseOut={(e) => e.target.style.backgroundColor = selectedMethod === "credit-card" ? '#F0F2F2' : '#fff'}
          >
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0F1111' }}>
              💳 Credit Card
            </div>
          </div>

          {/* Debit Card Option */}
          <div 
            style={getMethodStyle("debit-card")}
            onClick={() => setSelectedMethod("debit-card")}
            onMouseOver={(e) => e.target.style.backgroundColor = selectedMethod === "debit-card" ? '#F0F2F2' : '#f8f8f8'}
            onMouseOut={(e) => e.target.style.backgroundColor = selectedMethod === "debit-card" ? '#F0F2F2' : '#fff'}
          >
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0F1111' }}>
              💳 Debit Card
            </div>
          </div>

          {/* UPI Option */}
          <div 
            style={getMethodStyle("upi")}
            onClick={() => setSelectedMethod("upi")}
            onMouseOver={(e) => e.target.style.backgroundColor = selectedMethod === "upi" ? '#F0F2F2' : '#f8f8f8'}
            onMouseOut={(e) => e.target.style.backgroundColor = selectedMethod === "upi" ? '#F0F2F2' : '#fff'}
          >
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0F1111' }}>
              📱 UPI
            </div>
          </div>

          {/* Net Banking Option */}
          <div 
            style={getMethodStyle("net-banking")}
            onClick={() => setSelectedMethod("net-banking")}
            onMouseOver={(e) => e.target.style.backgroundColor = selectedMethod === "net-banking" ? '#F0F2F2' : '#f8f8f8'}
            onMouseOut={(e) => e.target.style.backgroundColor = selectedMethod === "net-banking" ? '#F0F2F2' : '#fff'}
          >
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0F1111' }}>
              🏦 Net Banking
            </div>
          </div>

          {/* Razorpay Option */}
          <div 
            style={getMethodStyle("razorpay")}
            onClick={() => setSelectedMethod("razorpay")}
            onMouseOver={(e) => e.target.style.backgroundColor = selectedMethod === "razorpay" ? '#F0F2F2' : '#f8f8f8'}
            onMouseOut={(e) => e.target.style.backgroundColor = selectedMethod === "razorpay" ? '#F0F2F2' : '#fff'}
          >
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0F1111' }}>
              ⚡ Razorpay
            </div>
          </div>
        </div>

        {/* UPI Sub-options */}
        {selectedMethod === "upi" && (
          <div style={{
            marginTop: '20px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            border: '1px solid #eee'
          }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#0F1111',
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              Select UPI App
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap'
            }}>
              <div 
                style={getUPIStyle("gpay")}
                onClick={() => setSelectedUPI("gpay")}
                onMouseOver={(e) => e.target.style.backgroundColor = selectedUPI === "gpay" ? '#F0F2F2' : '#f0f0f0'}
                onMouseOut={(e) => e.target.style.backgroundColor = selectedUPI === "gpay" ? '#F0F2F2' : '#fff'}
              >
                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#0F1111' }}>
                  GPay
                </div>
              </div>
              <div 
                style={getUPIStyle("phonepay")}
                onClick={() => setSelectedUPI("phonepay")}
                onMouseOver={(e) => e.target.style.backgroundColor = selectedUPI === "phonepay" ? '#F0F2F2' : '#f0f0f0'}
                onMouseOut={(e) => e.target.style.backgroundColor = selectedUPI === "phonepay" ? '#F0F2F2' : '#fff'}
              >
                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#0F1111' }}>
                  PhonePe
                </div>
              </div>
              <div 
                style={getUPIStyle("paytm")}
                onClick={() => setSelectedUPI("paytm")}
                onMouseOver={(e) => e.target.style.backgroundColor = selectedUPI === "paytm" ? '#F0F2F2' : '#f0f0f0'}
                onMouseOut={(e) => e.target.style.backgroundColor = selectedUPI === "paytm" ? '#F0F2F2' : '#fff'}
              >
                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#0F1111' }}>
                  Paytm
                </div>
              </div>
              <div 
                style={getUPIStyle("other")}
                onClick={() => setSelectedUPI("other")}
                onMouseOver={(e) => e.target.style.backgroundColor = selectedUPI === "other" ? '#F0F2F2' : '#f0f0f0'}
                onMouseOut={(e) => e.target.style.backgroundColor = selectedUPI === "other" ? '#F0F2F2' : '#fff'}
              >
                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#0F1111' }}>
                  Other UPI
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Selected Method Info */}
        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#E3F2FD',
          borderRadius: '6px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '14px', color: '#0F1111' }}>
            <strong>Selected:</strong> {
              selectedMethod === "credit-card" ? "Credit Card" :
              selectedMethod === "debit-card" ? "Debit Card" :
              selectedMethod === "upi" ? `UPI - ${selectedUPI || "Select UPI App"}` :
              selectedMethod === "net-banking" ? "Net Banking" :
              selectedMethod === "razorpay" ? "Razorpay Payment" :
              "Please select a payment method"
            }
          </div>
        </div>
      </div>

      {/* Pay Now Button */}
      <div style={{
        textAlign: 'center'
      }}>
        <button 
          onClick={payNow}
          disabled={!selectedMethod || (selectedMethod === "upi" && !selectedUPI)}
          style={{
            padding: '15px 60px',
            backgroundColor: selectedMethod ? '#FFD814' : '#cccccc',
            border: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: selectedMethod ? 'pointer' : 'not-allowed',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            transition: 'all 0.2s',
            opacity: selectedMethod ? 1 : 0.6
          }}
          onMouseOver={(e) => {
            if (selectedMethod) {
              e.target.style.backgroundColor = '#F7CA00';
            }
          }}
          onMouseOut={(e) => {
            if (selectedMethod) {
              e.target.style.backgroundColor = '#FFD814';
            }
          }}
        >
          {selectedMethod === "razorpay" ? "Pay with Razorpay" : "Pay Securely"} - ₹{total}
        </button>
      </div>

      {/* Security Badges */}
      <div style={{
        marginTop: '30px',
        textAlign: 'center',
        padding: '15px',
        borderTop: '1px solid #eee'
      }}>
        <div style={{
          fontSize: '12px',
          color: '#565959',
          marginBottom: '10px'
        }}>
          <strong>100% Secure Payment</strong>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          fontSize: '10px',
          color: '#767676'
        }}>
          <span>🔒 SSL Encrypted</span>
          <span>🛡️ PCI DSS Compliant</span>
          <span>✅ RBI Approved</span>
        </div>
      </div>
    </div>
  );
}