import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import products from "../api/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { user } = useAuth();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  // Filter products safely
  const filteredProducts = products.filter((p) => {
    const productPrice = Number(p.price); // convert to number
    const productRating = p.rating || 0; // default rating if missing

    // Price filter
    let priceMatch = true;
    if (price === "price < 500") priceMatch = productPrice < 500;
    else if (price === "price < 1000") priceMatch = productPrice < 1000;
    else if (price === "price > 1000") priceMatch = productPrice > 1000;
    else if (price === "price > 5000") priceMatch = productPrice > 5000;

    // Rating filter
    let ratingMatch = rating ? productRating >= Number(rating) : true;

    // Category filter
    let categoryMatch = category ? p.category === category : true;

    // Search filter
    let searchMatch = p.title.toLowerCase().includes(search.toLowerCase());

    return searchMatch && categoryMatch && priceMatch && ratingMatch;
  });

  return (
    <div className="home-page container" style={{ padding: 20 }}>
      <h2 className="welcome-heading">Welcome {user ? user.email : "to My Shop"}</h2>

      <div
        className="search-container"
        style={styles.searchContainer}
      >
        <input
          className="search-input"
          style={styles.searchInput}
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" style={styles.searchButton}>🔍</button>
      </div>

      <div className="filter-box" style={styles.amazonFilterBox}>
        <select
          className="dropdown"
          style={styles.amazonDropdown}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
          <option value="Grocery">Grocery</option>
        </select>

        <select
          className="dropdown"
          style={styles.amazonDropdown}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="">Price</option>
          <option value="price < 500">Below ₹500</option>
          <option value="price < 1000">Below ₹1000</option>
          <option value="price > 1000">Above ₹1000</option>
          <option value="price > 5000">Above ₹5000</option>
        </select>

        <select
          className="dropdown"
          style={styles.amazonDropdown}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Ratings</option>
          <option value="4">4 ★ & above</option>
          <option value="3">3 ★ & above</option>
          <option value="2">2 ★ & above</option>
        </select>
      </div>

      <div
        className="product-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}
      >
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  searchContainer: {
    display: "flex",
    width: "100%",
    maxWidth: 600,
    margin: "10px auto",
    borderRadius: 5,
    overflow: "hidden",
    border: "2px solid #febd69",
  },
  searchInput: {
    flex: 1,
    padding: "10px 15px",
    fontSize: 16,
    border: "none",
    outline: "none",
  },
  searchButton: {
    width: 60,
    backgroundColor: "#febd69",
    border: "none",
    cursor: "pointer",
    fontSize: 20,
  },
  amazonFilterBox: {
    display: "flex",
    gap: 10,
    margin: "20px auto",
    maxWidth: 600,
    justifyContent: "center",
  },
  amazonDropdown: {
    padding: 10,
    fontSize: 15,
    borderRadius: 5,
    border: "1px solid #ccc",
    cursor: "pointer",
  },
};

