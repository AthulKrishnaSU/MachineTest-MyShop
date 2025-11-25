import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, total } = useCart();
  const nav = useNavigate();

  if (cart.length === 0) return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      {/* Empty Cart Header */}
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '40px 20px',
        marginBottom: '30px'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#0F1111',
          marginBottom: '15px'
        }}>
          Your Cart is Empty
        </div>
        
        <div style={{
          fontSize: '16px',
          color: '#565959',
          marginBottom: '30px',
          maxWidth: '500px',
          margin: '0 auto 30px'
        }}>
          Looks like you haven't added any items to your cart yet. Start shopping to discover great products!
        </div>

        {/* Shopping Illustration */}
        <div style={{
          fontSize: '64px',
          marginBottom: '20px'
        }}>
          🛒
        </div>

        {/* Continue Shopping Button */}
        <Link 
          to="/"
          style={{
            display: 'inline-block',
            padding: '12px 40px',
            backgroundColor: '#FFD814',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textDecoration: 'none',
            color: '#0F1111',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#F7CA00'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#FFD814'}
        >
          Start Shopping
        </Link>
      </div>

      {/* Suggested Categories */}
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '30px 20px',
        marginBottom: '20px'
      }}>
        <div style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#0F1111',
          marginBottom: '20px'
        }}>
          Popular Categories
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '15px',
            border: '1px solid #eee',
            borderRadius: '6px',
            minWidth: '120px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => e.target.style.borderColor = '#007185'}
          onMouseOut={(e) => e.target.style.borderColor = '#eee'}
          onClick={() => nav('/')}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📱</div>
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0F1111' }}>Electronics</div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '15px',
            border: '1px solid #eee',
            borderRadius: '6px',
            minWidth: '120px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => e.target.style.borderColor = '#007185'}
          onMouseOut={(e) => e.target.style.borderColor = '#eee'}
          onClick={() => nav('/')}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>👕</div>
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0F1111' }}>Fashion</div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '15px',
            border: '1px solid #eee',
            borderRadius: '6px',
            minWidth: '120px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => e.target.style.borderColor = '#007185'}
          onMouseOut={(e) => e.target.style.borderColor = '#eee'}
          onClick={() => nav('/')}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🏠</div>
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0F1111' }}>Home</div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '15px',
            border: '1px solid #eee',
            borderRadius: '6px',
            minWidth: '120px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => e.target.style.borderColor = '#007185'}
          onMouseOut={(e) => e.target.style.borderColor = '#eee'}
          onClick={() => nav('/')}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📚</div>
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0F1111' }}>Books</div>
          </div>
        </div>
      </div>

      {/* Amazon Prime Promotion */}
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '25px',
        background: 'linear-gradient(135deg, #00A8E8 0%, #0077B6 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '10px'
        }}>
          🚚 Free Delivery with Prime
        </div>
        <div style={{
          fontSize: '14px',
          marginBottom: '15px',
          opacity: '0.9'
        }}>
          Enjoy fast, FREE delivery on millions of items
        </div>
        <button 
          style={{
            padding: '8px 20px',
            backgroundColor: '#FFD814',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: '#0F1111'
          }}
        >
          Try Prime
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
        Your Orders
      </h1>
      
      {cart.map(item => (
        <div 
          key={item.id} 
          style={{
            display: 'flex', 
            gap: '20px', 
            alignItems: 'flex-start',
            marginBottom: '20px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#fff'
          }}
        >
          <img 
            src={item.image} 
            style={{
              width: '120px',
              height: '120px',
              objectFit: 'contain'
            }} 
            alt={item.title} 
          />
          
          <div style={{ flex: 1 }}>
            <h4 style={{ 
              fontSize: '18px', 
              fontWeight: 'bold', 
              margin: '0 0 8px 0',
              color: '#007185'
            }}>
              {item.title}
            </h4>
            
            <p style={{ 
              fontSize: '20px', 
              fontWeight: 'bold', 
              margin: '0 0 12px 0',
              color: '#B12704'
            }}>
              ₹{item.price}
            </p>
            
            <p style={{ 
              fontSize: '14px', 
              color: '#007600',
              margin: '0 0 12px 0'
            }}>
              FREE delivery by Sun, 16 Sept
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                border: '1px solid #ddd',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <button 
                  onClick={() => decreaseQty(item.id)}
                  style={{
                    width: '30px',
                    height: '30px',
                    border: 'none',
                    backgroundColor: '#f0f2f2',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  -
                </button>
                <span style={{ 
                  margin: '0 12px',
                  fontSize: '16px',
                  minWidth: '20px',
                  textAlign: 'center'
                }}>
                  {item.qty}
                </span>
                <button 
                  onClick={() => increaseQty(item.id)}
                  style={{
                    width: '30px',
                    height: '30px',
                    border: 'none',
                    backgroundColor: '#f0f2f2',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  +
                </button>
              </div>
              
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#007185'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <div style={{
        marginTop: '30px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
        textAlign: 'right'
      }}>
        <h3 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold',
          margin: '0 0 20px 0'
        }}>
          Total: ₹{total}
        </h3>
        <button 
          onClick={() => nav('/checkout')}
          style={{
            padding: '12px 40px',
            backgroundColor: '#FFD814',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}