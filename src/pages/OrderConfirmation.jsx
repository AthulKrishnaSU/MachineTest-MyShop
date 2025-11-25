import React, { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function OrderConfirmation(){
  const { cart, total, clearCart } = useCart();
  const nav = useNavigate();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // Replace current history entry with confirmation page
    window.history.replaceState(null, "", window.location.href);

    if (cart.length > 0 && total > 0 && !orderData) {
      const orderId = Date.now();
      const newOrder = {
        id: orderId,
        items: [...cart],
        total: total,
        date: new Date().toLocaleString()
      };

      const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];
      localStorage.setItem("orders", JSON.stringify([newOrder, ...oldOrders]));
      setOrderData(newOrder);
      clearCart();
    }
  }, [cart, total, clearCart, orderData]);

  useEffect(() => {
    // Handle browser back button
    const handleBackButton = () => {
      nav("/", { replace: true });
    };

    // Add event listener for popstate (back/forward navigation)
    window.addEventListener('popstate', handleBackButton);

    // Push a new state to prevent going back to checkout
    window.history.pushState(null, "", window.location.href);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleBackButton);
      // Clear any pushed state on unmount
      window.history.replaceState(null, "", window.location.href);
    };
  }, [nav]);

  const displayTotal = orderData ? orderData.total : total;
  const displayItemCount = orderData ? orderData.items.length : cart.length;
  const orderId = orderData ? orderData.id : Date.now();

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Success Header */}
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '30px',
        marginBottom: '25px',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#067D62',
          marginBottom: '15px'
        }}>
          🎉 Order Placed Successfully!
        </div>
        
        <div style={{
          fontSize: '18px',
          color: '#0F1111',
          marginBottom: '20px'
        }}>
          Thank you for your purchase. Your order has been confirmed.
        </div>

        {/* Order Summary */}
        <div style={{
          display: 'inline-block',
          backgroundColor: '#F0F2F2',
          borderRadius: '8px',
          padding: '20px',
          marginTop: '15px',
          textAlign: 'left'
        }}>
          <div style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#0F1111',
            marginBottom: '10px'
          }}>
            Order Summary:
          </div>
          <div style={{
            fontSize: '14px',
            color: '#565959',
            lineHeight: '1.6'
          }}>
            • Order Total: <span style={{ fontWeight: 'bold', color: '#B12704' }}>₹{displayTotal}</span><br/>
            • Items Ordered: {displayItemCount}<br/>
            • Delivery: <span style={{ color: '#067D62' }}>FREE delivery by Sat, 14 Sept</span><br/>
            • Order ID: #{orderId.toString().slice(-8)}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '25px',
        marginBottom: '25px'
      }}>
        <div style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#0F1111',
          marginBottom: '15px',
          textAlign: 'center'
        }}>
          What's Next?
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '15px',
            flex: '1',
            minWidth: '150px'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#0F1111',
              marginBottom: '8px'
            }}>
              📧 Order Confirmation
            </div>
            <div style={{
              fontSize: '12px',
              color: '#565959'
            }}>
              Confirmation sent to your email
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '15px',
            flex: '1',
            minWidth: '150px'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#0F1111',
              marginBottom: '8px'
            }}>
              🚚 Shipping Update
            </div>
            <div style={{
              fontSize: '12px',
              color: '#565959'
            }}>
              You'll receive tracking details soon
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '15px',
            flex: '1',
            minWidth: '150px'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#0F1111',
              marginBottom: '8px'
            }}>
              📦 Delivery
            </div>
            <div style={{
              fontSize: '12px',
              color: '#565959'
            }}>
              Expected by Sat, 14 Sept
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        flexWrap: 'wrap',
        marginBottom: '25px'
      }}>
        <button 
          onClick={() => nav("/orders")}
          style={{
            padding: '12px 30px',
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
          View My Orders
        </button>

        <button 
          onClick={() => nav("/")}
          style={{
            padding: '12px 30px',
            backgroundColor: '#fff',
            border: '1px solid #D5D9D9',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: '#0F1111',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#F7FAFA'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
        >
          Continue Shopping
        </button>
      </div>

      {/* Customer Support */}
      <div style={{
        backgroundColor: '#F0F2F2',
        border: '1px solid #D5D9D9',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#0F1111',
          marginBottom: '10px'
        }}>
          Need Help?
        </div>
        <div style={{
          fontSize: '14px',
          color: '#565959',
          marginBottom: '15px'
        }}>
          Contact our customer support for any questions about your order
        </div>
        <div style={{
          fontSize: '12px',
          color: '#007185'
        }}>
          📞 Customer Support: 1800-123-4567
        </div>
      </div>

      {/* Security Notice */}
      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#565959',
        padding: '15px',
        borderTop: '1px solid #eee'
      }}>
        <p>Your order is secure and protected by our satisfaction guarantee</p>
      </div>
    </div>
  );
}