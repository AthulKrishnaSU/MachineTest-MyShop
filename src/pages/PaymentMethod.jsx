import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentMethod(){
  const [method, setMethod] = useState("cod");
  const nav = useNavigate();

  const continuePayment = () => {
    if (method === "cod") {
      nav("/order-confirmation");
    } else {
      nav("/payment-gateway");
    }
  };

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
        paddingBottom: '10px'
      }}>
        Select Payment Method
      </div>

      {/* Payment Methods Container */}
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px'
      }}>
        {/* Cash on Delivery Option */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          padding: '15px',
          border: method === 'cod' ? '2px solid #007185' : '1px solid #ddd',
          borderRadius: '8px',
          marginBottom: '15px',
          backgroundColor: method === 'cod' ? '#F0F2F2' : '#fff',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onClick={() => setMethod("cod")}
        >
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={method === "cod"}
            onChange={() => setMethod("cod")}
            style={{
              marginRight: '15px',
              marginTop: '2px',
              transform: 'scale(1.2)'
            }}
          />
          <div>
            <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#0F1111',
              marginBottom: '5px'
            }}>
              Cash on Delivery (COD)
            </div>
            <div style={{
              fontSize: '14px',
              color: '#565959'
            }}>
              Pay when you receive your order
            </div>
          </div>
        </div>

        {/* Online Payment Option */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          padding: '15px',
          border: method === 'online' ? '2px solid #007185' : '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: method === 'online' ? '#F0F2F2' : '#fff',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onClick={() => setMethod("online")}
        >
          <input
            type="radio"
            name="payment"
            value="online"
            checked={method === "online"}
            onChange={() => setMethod("online")}
            style={{
              marginRight: '15px',
              marginTop: '2px',
              transform: 'scale(1.2)'
            }}
          />
          <div>
            <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#0F1111',
              marginBottom: '5px'
            }}>
              Online Payment (Demo)
            </div>
            <div style={{
              fontSize: '14px',
              color: '#565959'
            }}>
              Pay securely with your card or other payment methods
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div style={{
        textAlign: 'right'
      }}>
        <button 
          onClick={continuePayment}
          style={{
            padding: '12px 40px',
            backgroundColor: '#FFD814',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#F7CA00'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#FFD814'}
        >
          Continue
        </button>
      </div>

      {/* Security Notice */}
      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#565959'
      }}>
        <p>Your payment information is secure and encrypted</p>
      </div>
    </div>
  );
}