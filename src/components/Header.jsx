import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

export default function Header(){
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const nav = useNavigate();

  const handleLogout = async () => {
    await logout();
    nav("/login");
  };

  return (
    <header style={{
      backgroundColor: '#131921',
      padding: '10px 20px',
      borderBottom: '1px solid #3b4148',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Top Row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '5px'
      }}>
        {/* Logo */}
        <Link 
          to="/" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '24px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <span style={{ color: '#FF9900' }}>My</span>
          <span style={{ color: 'white' }}>-Shop</span>
        </Link>

        {/* Search Bar */}
        <div style={{
          display: 'flex',
          flex: '1',
          maxWidth: '800px',
          margin: '0 20px',
          height: '40px'
        }}>
          <input 
            type="text" 
            placeholder="Search products..."
            style={{
              flex: '1',
              padding: '0 15px',
              border: 'none',
              borderTopLeftRadius: '4px',
              borderBottomLeftRadius: '4px',
              fontSize: '14px',
              outline: 'none'
            }}
          />
          <button style={{
            backgroundColor: '#febd69',
            border: 'none',
            borderTopRightRadius: '4px',
            borderBottomRightRadius: '4px',
            padding: '0 15px',
            cursor: 'pointer'
          }}>
            🔍
          </button>
        </div>

        {/* Right Side Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          color: 'white'
        }}>
          {/* User Account */}
          {user ? (
            <div style={{
              position: 'relative',
              cursor: 'pointer'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: '12px'
              }}>
                <span style={{ color: '#cccccc' }}>Hello, {user.email.split('@')[0]}</span>
                <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Account & Lists</span>
              </div>
            </div>
          ) : (
            <Link 
              to="/login" 
              style={{
                color: 'white',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                fontSize: '12px'
              }}
            >
              <span style={{ color: '#cccccc' }}>Hello, Sign in</span>
              <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Account & Lists</span>
            </Link>
          )}


  <Link 
  to="/" 
  style={{
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: '10px 12px',
    border: '1px solid #febd69',
    borderRadius: '20px',
    backgroundColor: '#ff9900',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = '#ffac31';
    e.target.style.borderColor = '#ffac31';
    e.target.style.transform = 'scale(1.05)';
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#ff9900';
    e.target.style.borderColor = '#febd69';
    e.target.style.transform = 'scale(1)';
  }}
>
  <div style={{
    fontSize: '20px',
    marginRight: '10px'
  }}>
    {/* Icon or content can go here */}
  </div>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    fontSize: '12px',
    alignItems: 'center'
  }}>
    <span style={{ 
      fontWeight: 'bold', 
      fontSize: '14px',
      color: '#131921'
    }}>
      Home
    </span>
    {/* Additional content can go here */}
  </div>
</Link>
     
     {/* Cart */}

<Link 
  to="/cart" 
  style={{
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: '8px 12px',
    border: '1px solid #febd69',
    borderRadius: '20px',
    backgroundColor: '#ff9900',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = '#ffac31';
    e.target.style.borderColor = '#ffac31';
    e.target.style.transform = 'scale(1.05)';
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#ff9900';
    e.target.style.borderColor = '#febd69';
    e.target.style.transform = 'scale(1)';
  }}
>
  <div style={{
    fontSize: '20px',
    marginRight: '8px'
  }}>
    🛒
  </div>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    fontSize: '12px',
    alignItems: 'center'
  }}>
    <span style={{ 
      fontWeight: 'bold', 
      fontSize: '14px',
      color: '#131921'
    }}>
      Cart
    </span>
    <span style={{ 
      color: '#131921', 
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '12px'
    }}>
      {cart.length} item{cart.length !== 1 ? 's' : ''}
    </span>
  </div>
  {cart.length > 0 && (
    <div style={{
      position: 'absolute',
      top: '-8px',
      right: '-8px',
      backgroundColor: '#ff4444',
      color: 'white',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid #131921',
      boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
    }}>
      {cart.length}
    </div>
  )}
</Link>
          {/* Logout Button (for logged in users) */}
          {user && (
            <button 
              onClick={handleLogout}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #666',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '2px',
                fontSize: '12px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Logout
            </button>
          )}
        </nav>
      </div>

      {/* Bottom Row - Categories */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        color: 'white',
        fontSize: '14px',
        paddingTop: '5px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '5px 10px',
          border: '1px solid transparent'
        }}
        onMouseOver={(e) => e.target.style.borderColor = 'white'}
        onMouseOut={(e) => e.target.style.borderColor = 'transparent'}
        >
          <span>☰ All</span>
        </div>
        
        <Link 
          to="/" 
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '5px 10px',
            border: '1px solid transparent'
          }}
          onMouseOver={(e) => e.target.style.borderColor = 'white'}
          onMouseOut={(e) => e.target.style.borderColor = 'transparent'}
        >
          Today's Deals
        </Link>
        
        <Link 
          to="/" 
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '5px 10px',
            border: '1px solid transparent'
          }}
          onMouseOver={(e) => e.target.style.borderColor = 'white'}
          onMouseOut={(e) => e.target.style.borderColor = 'transparent'}
        >
          Customer Service
        </Link>
        
        <Link 
          to="/" 
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '5px 10px',
            border: '1px solid transparent'
          }}
          onMouseOver={(e) => e.target.style.borderColor = 'white'}
          onMouseOut={(e) => e.target.style.borderColor = 'transparent'}
        >
          Registry
        </Link>
        
        <Link 
          to="/" 
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '5px 10px',
            border: '1px solid transparent'
          }}
          onMouseOver={(e) => e.target.style.borderColor = 'white'}
          onMouseOut={(e) => e.target.style.borderColor = 'transparent'}
        >
          Gift Cards
        </Link>
        
        <Link 
          to="/" 
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '5px 10px',
            border: '1px solid transparent'
          }}
          onMouseOver={(e) => e.target.style.borderColor = 'white'}
          onMouseOut={(e) => e.target.style.borderColor = 'transparent'}
        >
          Sell
        </Link>
      </div>

      {/* Show Orders link only when user is logged in */}
      {user && (
        <div style={{ 
          marginTop: '10px', 
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          <Link 
            to="/orders" 
            style={{ 
              fontSize: '16px', 
              fontWeight: 'bold',
              color: 'white',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              border: '1px solid transparent',
              borderRadius: '4px',
              backgroundColor: '#232f3e'
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = 'white';
              e.target.style.backgroundColor = '#37475A';
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = 'transparent';
              e.target.style.backgroundColor = '#232f3e';
            }}
          >
            📦 Your Orders
          </Link>
        </div>
      )}
    </header>
  );
}