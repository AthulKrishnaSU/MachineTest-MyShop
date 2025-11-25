import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ p }) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "16px",
        background: "#ffffff",
        boxShadow: "0 2px 5px rgba(15,17,17,.15)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(15,17,17,.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 5px rgba(15,17,17,.15)";
      }}
    >
      {/* Image */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        marginBottom: "12px"
      }}>
        <img
          src={p.image}
          alt={p.title}
          style={{
            maxWidth: "100%",
            maxHeight: "180px",
            objectFit: "contain",
            background: "#fff",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "14px",
          lineHeight: "1.4",
          marginBottom: "8px",
          height: "40px",
          overflow: "hidden",
          fontWeight: "400",
          color: "#0f1111",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical"
        }}
      >
        {p.title}
      </h3>

      {/* Rating */}
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        marginBottom: "8px" 
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          background: "#ffffff",
          padding: "2px 6px 2px 4px",
          borderRadius: "12px",
          border: "1px solid #e0e0e0"
        }}>
          <span style={{
            color: "#ffa41c",
            fontSize: "14px",
            fontWeight: "bold",
            marginRight: "2px"
          }}>
            ★
          </span>
          <span style={{
            fontSize: "12px",
            fontWeight: "600",
            color: "#0f1111"
          }}>
            {p.rating}
          </span>
        </div>
        <span style={{ 
          fontSize: "12px", 
          color: "#007185", 
          marginLeft: "6px",
          fontWeight: "400"
        }}>
          ({p.reviewsCount})
        </span>
      </div>

      {/* Popularity */}
      <div style={{
        fontSize: "12px",
        color: "#c45500",
        fontWeight: "600",
        marginBottom: "8px"
      }}>
        {Math.floor(p.reviewsCount / 100) * 100}+ bought in past month
      </div>

      {/* Price */}
      <div style={{ marginBottom: "8px" }}>
        <h2 style={{
          fontSize: "21px",
          fontWeight: "700",
          color: "#0f1111",
          margin: "0 0 4px 0"
        }}>
          ₹{p.price}
        </h2>
        <div style={{
          fontSize: "12px",
          color: "#565959",
          fontWeight: "400"
        }}>
          M.R.P.: <span style={{ textDecoration: "line-through" }}>₹{Math.round(p.price * 1.4)}</span> 
          <span style={{ color: "#cc0c39", fontWeight: "600", marginLeft: "4px" }}>
            ({Math.floor(Math.random() * 30) + 20}% off)
          </span>
        </div>
      </div>

      {/* Delivery */}
      <div style={{ 
        fontSize: "14px", 
        color: "#007600", 
        fontWeight: "600",
        marginBottom: "12px"
      }}>
        FREE delivery by <b>Sun, 15 Sept</b>
      </div>

      {/* Extra Savings */}
      <div style={{
        fontSize: "14px",
        color: "#0f1111",
        fontWeight: "600",
        marginBottom: "16px"
      }}>
        Save extra with No Cost EMI
      </div>

      {/* Prime Badge */}
      <div style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "16px"
      }}>
        <div style={{
          background: "linear-gradient(135deg, #00A8E8 0%, #0077B6 100%)",
          color: "white",
          padding: "2px 8px",
          borderRadius: "3px",
          fontSize: "12px",
          fontWeight: "bold",
          marginRight: "8px"
        }}>
          Prime
        </div>
        <span style={{
          fontSize: "12px",
          color: "#565959"
        }}>
          FREE Delivery
        </span>
      </div>

      {/* VIEW BUTTON Styled like Amazon */}
      <div style={{ marginTop: "auto" }}>
        <Link
          to={`/product/${p.id}`}
          style={{
            display: "block",
            background: "#ffd814",
            border: "1px solid #fcd200",
            color: "#0f1111",
            textAlign: "center",
            padding: "8px 0",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            fontSize: "14px",
            transition: "all 0.2s ease",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#f7ca00";
            e.target.style.borderColor = "#f2c200";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#ffd814";
            e.target.style.borderColor = "#fcd200";
          }}
        >
          View Product
        </Link>
      </div>
    </div>
  );
}