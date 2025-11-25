import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../api/products";
import { useCart } from "../contexts/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);

  if (!product) return <div>Product not found</div>;

  const submitReview = (e) => {
    e.preventDefault();
    product.reviews.push({
      id: Date.now(),
      user: "You",
      text: reviewText,
      rating
    });
    setReviewText("");
    setRating(5);
  };

  const handleBuyNow = () => {
    // Add product to cart first
    addToCart(product);
    // Then navigate to checkout
    navigate('/checkout');
  };

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Breadcrumb */}
      <div style={{
        fontSize: '12px',
        color: '#565959',
        marginBottom: '20px'
      }}>
        <span>Electronics</span> › <span>Accessories</span> › <span>{product.title.split(' ').slice(0, 2).join(' ')}</span>
      </div>

      <div style={{ 
        display: "flex", 
        gap: "30px",
        alignItems: "flex-start"
      }}>
        
        {/* LEFT — PRODUCT IMAGE */}
        <div style={{ 
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '20px',
            background: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px'
          }}>
            <img
              src={product.image}
              alt={product.title}
              style={{
                maxWidth: '100%',
                maxHeight: '360px',
                objectFit: 'contain'
              }}
            />
          </div>
          
          {/* Thumbnail Images */}
          <div style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center'
          }}>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} style={{
                width: '60px',
                height: '60px',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                padding: '4px',
                cursor: 'pointer',
                background: '#fff'
              }}>
                <img
                  src={product.image}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE — PRODUCT INFO */}
        <div style={{ 
          flex: 1,
          paddingRight: '20px'
        }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: '400',
            lineHeight: '1.4',
            color: '#0f1111',
            marginBottom: '10px'
          }}>
            {product.title}
          </h1>

          {/* Ratings */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '12px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: '#ffffff',
              padding: '4px 8px 4px 6px',
              borderRadius: '14px',
              border: '1px solid #e0e0e0',
              marginRight: '8px'
            }}>
              <span style={{
                color: "#ffa41c",
                fontSize: "16px",
                fontWeight: "bold",
                marginRight: "4px"
              }}>
                ★
              </span>
              <span style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#0f1111"
              }}>
                {product.rating}
              </span>
            </div>
            <span style={{ 
              fontSize: "14px", 
              color: "#007185", 
              marginRight: '12px'
            }}>
              {product.reviews.length} ratings
            </span>
            <span style={{ 
              fontSize: "14px", 
              color: "#007185",
              borderLeft: '1px solid #e0e0e0',
              paddingLeft: '12px'
            }}>
              {Math.floor(product.reviews.length / 10) * 100}+ bought in past month
            </span>
          </div>

          <hr style={{ 
            margin: "20px 0", 
            border: 'none',
            borderTop: '1px solid #e0e0e0'
          }} />

          {/* Price */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{
              fontSize: '28px',
              fontWeight: '400',
              color: '#0f1111',
              marginBottom: '4px'
            }}>
              ₹{product.price}
            </div>
            <div style={{
              fontSize: '14px',
              color: '#565959'
            }}>
              M.R.P.: <span style={{ textDecoration: 'line-through' }}>₹{Math.round(product.price * 1.4)}</span>
              <span style={{ 
                color: '#cc0c39', 
                fontWeight: '600', 
                marginLeft: '8px' 
              }}>
                ({(Math.floor(Math.random() * 30) + 20)}% off)
              </span>
            </div>
            <div style={{
              fontSize: '14px',
              color: '#007600',
              fontWeight: '600',
              marginTop: '4px'
            }}>
              Save extra with No Cost EMI
            </div>
          </div>

          {/* Delivery */}
          <div style={{
            fontSize: '18px',
            color: '#007600',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            FREE delivery <b>Tomorrow by 9 PM</b>
          </div>

          {/* Prime Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #00A8E8 0%, #0077B6 100%)',
              color: 'white',
              padding: '4px 10px',
              borderRadius: '3px',
              fontSize: '14px',
              fontWeight: 'bold',
              marginRight: '10px'
            }}>
              Prime
            </div>
            <span style={{
              fontSize: '14px',
              color: '#565959'
            }}>
              FREE Delivery on eligible orders
            </span>
          </div>

          {/* Highlights */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: '700',
              marginBottom: '8px',
              color: '#0f1111'
            }}>
              About this item
            </h3>
            <ul style={{ 
              lineHeight: '1.6',
              color: '#0f1111',
              fontSize: '14px',
              paddingLeft: '20px'
            }}>
              <li style={{ marginBottom: '6px' }}>High quality material with durable construction</li>
              <li style={{ marginBottom: '6px' }}>Comfortable fit designed for daily use</li>
              <li style={{ marginBottom: '6px' }}>Easy to maintain and clean</li>
              <li style={{ marginBottom: '6px' }}>Comes with manufacturer warranty</li>
              <li style={{ marginBottom: '6px' }}>Suitable for all age groups</li>
            </ul>
          </div>

          <hr style={{ 
            margin: "24px 0", 
            border: 'none',
            borderTop: '1px solid #e0e0e0'
          }} />

          {/* REVIEWS SECTION */}
          <div>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '700',
              marginBottom: '16px',
              color: '#0f1111'
            }}>
              Customer Reviews
            </h3>
            
            {product.reviews.length === 0 ? (
              <p style={{ color: '#565959', fontSize: '14px' }}>No reviews yet. Be the first to review this product!</p>
            ) : (
              <div style={{ marginBottom: '24px' }}>
                {product.reviews.map((r) => (
                  <div
                    key={r.id}
                    style={{
                      borderBottom: '1px solid #f0f2f2',
                      padding: '16px 0',
                      marginBottom: '8px'
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '8px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '12px'
                      }}>
                        <span style={{
                          color: "#ffa41c",
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginRight: "4px"
                        }}>
                          ★
                        </span>
                        <span style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#0f1111"
                        }}>
                          {r.rating}
                        </span>
                      </div>
                      <strong style={{ 
                        fontSize: '14px', 
                        color: '#0f1111' 
                      }}>
                        {r.user}
                      </strong>
                    </div>
                    <p style={{ 
                      margin: "0", 
                      fontSize: '14px',
                      lineHeight: '1.5',
                      color: '#0f1111'
                    }}>
                      {r.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Add Review Form */}
            <form onSubmit={submitReview} style={{ 
              backgroundColor: '#f8f9fa',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #e0e0e0'
            }}>
              <h4 style={{ 
                fontSize: '16px', 
                fontWeight: '700',
                marginBottom: '16px',
                color: '#0f1111'
              }}>
                Write a Review
              </h4>
              
              <div style={{ marginBottom: '16px' }}>
                <label style={{ 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#0f1111',
                  marginRight: '12px'
                }}>
                  Rating: 
                </label>
                <select
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  style={{ 
                    padding: '6px 12px',
                    border: '1px solid #a6a6a6',
                    borderRadius: '4px',
                    fontSize: '14px',
                    backgroundColor: '#fff'
                  }}
                >
                  {[5, 4, 3, 2, 1].map((v) => (
                    <option key={v} value={v}>{v} ★</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Share your experience with this product..."
                  style={{
                    width: "100%",
                    height: '100px',
                    padding: '12px',
                    border: "1px solid #a6a6a6",
                    borderRadius: '4px',
                    fontSize: '14px',
                    resize: 'vertical',
                    fontFamily: 'Arial, sans-serif'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '10px 24px',
                  background: '#ffd814',
                  border: '1px solid #fcd200',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#0f1111',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f7ca00';
                  e.target.style.borderColor = '#f2c200';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#ffd814';
                  e.target.style.borderColor = '#fcd200';
                }}
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT — BUY BOX (Amazon Style) */}
        <div
          style={{
            width: '280px',
            border: '1px solid #e0e0e0',
            padding: '20px',
            borderRadius: '8px',
            background: '#fff',
            height: 'fit-content',
            boxShadow: '0 2px 5px rgba(15,17,17,.15)'
          }}
        >
          <div style={{ 
            fontSize: '28px', 
            fontWeight: '400',
            color: '#0f1111',
            marginBottom: '12px'
          }}>
            ₹{product.price}
          </div>

          <div style={{ 
            fontSize: '14px', 
            color: '#007600',
            fontWeight: '600',
            marginBottom: '12px'
          }}>
            FREE delivery <b>Tomorrow by 9 PM</b>
          </div>

          <div style={{ 
            fontSize: '12px', 
            color: '#565959',
            marginBottom: '16px'
          }}>
            Or fastest delivery Today. Order within 2 hrs 14 mins
          </div>

          <div style={{ 
            fontSize: '14px', 
            color: '#007600',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            In Stock
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ 
              fontSize: '14px', 
              fontWeight: '600',
              color: '#0f1111',
              marginBottom: '8px',
              display: 'block'
            }}>
              Quantity: 1
            </label>
          </div>

          <button
            onClick={() => addToCart(product)}
            style={{
              marginBottom: '8px',
              width: "100%",
              padding: '10px 0',
              background: '#ffd814',
              border: '1px solid #fcd200',
              fontSize: '14px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '600',
              color: '#0f1111',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#f7ca00';
              e.target.style.borderColor = '#f2c200';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#ffd814';
              e.target.style.borderColor = '#fcd200';
            }}
          >
            Add to Cart
          </button>

          <button
            onClick={handleBuyNow}
            style={{
              width: "100%",
              padding: '10px 0',
              background: '#ffa41c',
              border: '1px solid #ff8f00',
              fontSize: '14px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '600',
              color: '#0f1111',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#fa8900';
              e.target.style.borderColor = '#e67a00';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#ffa41c';
              e.target.style.borderColor = '#ff8f00';
            }}
          >
            Buy Now
          </button>
           
          <div style={{ 
            fontSize: '12px', 
            color: '#565959',
            textAlign: 'center',
            marginTop: '12px'
          }}>
            Secure transaction
          </div>

          <div style={{ 
            marginTop: '16px',
            paddingTop: '16px',
            borderTop: '1px solid #e0e0e0'
          }}>
            <div style={{ 
              fontSize: '14px', 
              fontWeight: '600',
              color: '#0f1111',
              marginBottom: '8px'
            }}>
              Add gift options
            </div>
            <div style={{ 
              fontSize: '12px', 
              color: '#007185',
              cursor: 'pointer'
            }}>
              Add to Gift List
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}