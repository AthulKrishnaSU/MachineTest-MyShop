import React from "react";

export default function Orders(){
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {
    return (
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px 20px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
      }}>
        <div style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '60px 20px',
          marginBottom: '30px'
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#0F1111',
            marginBottom: '15px'
          }}>
            No Orders Yet
          </div>
          
          <div style={{
            fontSize: '16px',
            color: '#565959',
            marginBottom: '30px',
            maxWidth: '400px',
            margin: '0 auto 30px'
          }}>
            You haven't placed any orders yet. Start shopping to discover great products!
          </div>

          <div style={{
            fontSize: '64px',
            marginBottom: '20px'
          }}>
            📦
          </div>

          <button 
            onClick={() => window.location.href = "/"}
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
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      maxWidth: '1200px', 
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
        color: '#0F1111'
      }}>
        Your Orders
      </div>

      {/* Orders Count */}
      <div style={{
        fontSize: '16px',
        color: '#565959',
        marginBottom: '20px'
      }}>
        {orders.length} order{orders.length !== 1 ? 's' : ''} placed
      </div>

      {orders.map(order => (
        <div 
          key={order.id} 
          style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '25px',
            marginBottom: '20px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
          }}
        >
          {/* Order Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '20px',
            paddingBottom: '15px',
            borderBottom: '1px solid #eee'
          }}>
            <div>
              <div style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#0F1111',
                marginBottom: '5px'
              }}>
                Order #{(order.id || '').toString().slice(-8)}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#565959'
              }}>
                Placed on {order.date}
              </div>
            </div>
            
            <div style={{
              textAlign: 'right'
            }}>
              <div style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#B12704',
                marginBottom: '5px'
              }}>
                ₹{order.total}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#007600',
                fontWeight: 'bold'
              }}>
                ✓ Order Confirmed
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div>
            {order.items.map(item => (
              <div 
                key={item.id} 
                style={{
                  display: 'flex',
                  gap: '15px',
                  padding: '15px',
                  marginBottom: '10px',
                  border: '1px solid #eee',
                  borderRadius: '6px',
                  backgroundColor: '#fafafa'
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'contain',
                    borderRadius: '4px'
                  }} 
                />
                
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#007185',
                    marginBottom: '8px',
                    lineHeight: '1.4'
                  }}>
                    {item.title}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    fontSize: '14px',
                    color: '#565959'
                  }}>
                    <div>
                      <strong>Qty:</strong> {item.qty}
                    </div>
                    <div>
                      <strong>Price:</strong> ₹{item.price}
                    </div>
                    <div>
                      <strong>Total:</strong> ₹{item.price * item.qty}
                    </div>
                  </div>
                  
                  <div style={{
                    fontSize: '14px',
                    color: '#007600',
                    marginTop: '8px',
                    fontWeight: 'bold'
                  }}>
                    ✓ Delivered on Sep 16, 2024
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Actions */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '15px',
            marginTop: '20px',
            paddingTop: '15px',
            borderTop: '1px solid #eee'
          }}>
            <button 
              style={{
                padding: '8px 16px',
                backgroundColor: '#fff',
                border: '1px solid #D5D9D9',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                color: '#0F1111',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#F7FAFA'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
            >
              View Invoice
            </button>
            
            <button 
              style={{
                padding: '8px 16px',
                backgroundColor: '#fff',
                border: '1px solid #D5D9D9',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                color: '#0F1111',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#F7FAFA'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
            >
              Buy Again
            </button>
            
            <button 
              style={{
                padding: '8px 16px',
                backgroundColor: '#fff',
                border: '1px solid #D5D9D9',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                color: '#0F1111',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#F7FAFA'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
            >
              Track Package
            </button>
          </div>
        </div>
      ))}

      {/* Orders Summary */}
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        marginTop: '30px',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '16px',
          color: '#565959',
          marginBottom: '15px'
        }}>
          Total amount spent across all orders
        </div>
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#B12704'
        }}>
          ₹{orders.reduce((sum, order) => sum + order.total, 0)}
        </div>
      </div>

      {/* Help Section */}
      <div style={{
        backgroundColor: '#F0F2F2',
        border: '1px solid #D5D9D9',
        borderRadius: '8px',
        padding: '20px',
        marginTop: '20px',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#0F1111',
          marginBottom: '10px'
        }}>
          Need Help with Your Orders?
        </div>
        <div style={{
          fontSize: '14px',
          color: '#565959',
          marginBottom: '15px'
        }}>
          Contact our customer support for any order-related questions
        </div>
        <div style={{
          fontSize: '12px',
          color: '#007185'
        }}>
          📞 Customer Support: 1800-123-4567
        </div>
      </div>
    </div>
  );
}