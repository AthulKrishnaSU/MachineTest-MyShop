import React from "react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Checkout(){
  const { cart, total } = useCart();
  const { user } = useAuth();
  const nav = useNavigate();

  const goToPaymentMethod = () => {
    if (!user) {
      nav("/login");
      return;
    }
    nav("/payment-method");
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
        Checkout
      </div>

      {/* Main Content Container */}
      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        {/* Left Column - Order Summary */}
        <div style={{
          flex: '1',
          minWidth: '300px',
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#0F1111'
          }}>
            Order Summary
          </h3>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px',
            paddingBottom: '15px',
            borderBottom: '1px solid #eee'
          }}>
            <span style={{ fontSize: '16px', color: '#0F1111' }}>
              Items:
            </span>
            <span style={{ 
              fontSize: '18px', 
              fontWeight: 'bold',
              color: '#0F1111'
            }}>
              {cart.length}
            </span>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <span style={{ 
              fontSize: '18px', 
              fontWeight: 'bold',
              color: '#0F1111'
            }}>
              Total Amount:
            </span>
            <span style={{ 
              fontSize: '20px', 
              fontWeight: 'bold',
              color: '#B12704'
            }}>
              ₹{total}
            </span>
          </div>

          {/* Payment Method Section */}
          <div style={{
            marginTop: '25px',
            paddingTop: '20px',
            borderTop: '1px solid #ddd'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#0F1111'
            }}>
              Choose Payment Method
            </h3>
            
            <button 
              onClick={goToPaymentMethod}
              style={{
                width: '100%',
                padding: '12px',
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
              Proceed to Payment
            </button>
          </div>
        </div>

        {/* Right Column - Additional Info (Optional) */}
        <div style={{
          flex: '1',
          minWidth: '250px',
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#0F1111'
          }}>
            Order Details
          </h3>
          
          <div style={{ marginBottom: '15px' }}>
            <p style={{ 
              fontSize: '14px', 
              color: '#565959',
              marginBottom: '8px'
            }}>
              <strong>Delivery:</strong> FREE delivery available
            </p>
            <p style={{ 
              fontSize: '14px', 
              color: '#565959',
              marginBottom: '8px'
            }}>
              <strong>Estimated delivery:</strong> Sun, 16 Sept
            </p>
          </div>

          {user && (
            <div style={{
              padding: '15px',
              backgroundColor: '#F0F2F2',
              borderRadius: '4px',
              marginTop: '15px'
            }}>
              <p style={{ 
                fontSize: '14px', 
                color: '#0F1111',
                margin: '0'
              }}>
                <strong>Shipping to:</strong> {user.email}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Security Notice */}
      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#565959'
      }}>
        <p>Your order is secure and encrypted</p>
      </div>
    </div>
  );
}
