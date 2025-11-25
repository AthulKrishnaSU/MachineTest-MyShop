import React, { useState, useEffect } from "react";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  // Fetch all products from backend
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      console.log("Fetched products:", data);
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Submit new product
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price || !category) {
      alert("Please enter title, price, and category");
      return;
    }

    const product = { title, price, image, description, category };

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Product added successfully!");
        // Clear form
        setTitle("");
        setPrice("");
        setImage("");
        setDescription("");
        setCategory("");
        // Refresh product list
        fetchProducts();
      } else {
        alert(data.error || "Failed to add product");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Server error, check console");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br /><br />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <br /><br />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br /><br />
        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br /><br />
        <button type="submit">Add Product</button>
      </form>

      <hr />

      <h2>All Products</h2>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "200px",
              }}
            >
              <img
                src={p.image || "https://via.placeholder.com/150"}
                alt={p.title}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h4>{p.title}</h4>
              <p>Category: {p.category}</p>
              <p>Price: ₹{p.price}</p>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
