import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Path for products.json
const productsFile = path.join(__dirname, "data", "products.json");

// --- Read products ---
function readProducts() {
  try {
    if (!fs.existsSync(productsFile)) return [];
    const data = fs.readFileSync(productsFile, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading products:", err);
    return [];
  }
}

// --- Save products ---
function saveProducts(products) {
  try {
    const dir = path.dirname(productsFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
    console.log("Products saved to", productsFile);
  } catch (err) {
    console.error("Error saving products:", err);
  }
}

// --- GET all products ---
app.get("/api/products", (req, res) => {
  const products = readProducts();
  res.json(products);
});

// --- POST new product ---
app.post("/api/products", (req, res) => {
  console.log("Request body →", req.body);

  const { title, price, image, description, category } = req.body;

  if (!title || !price || !category) {
    return res.status(400).json({ error: "Title, price, and category are required" });
  }

  const products = readProducts();

  const newProduct = {
    id: Date.now().toString(),
    title,
    price,
    image,
    description,
    category, 
    reviews: []
  };

  products.push(newProduct);
  saveProducts(products);

  res.status(201).json({ message: "Product added", product: newProduct });
});

// Start server
app.listen(5000, () =>
  console.log("✅ Server running on http://localhost:5000")
);
