import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import products from "../api/products";

export async function uploadAllProducts() {
  try {
    for (let p of products) {
      await addDoc(collection(db, "products"), {
        title: p.title,
        price: p.price,
        image: p.image,
        description: p.description,
        createdAt: new Date(),
      });
    }
    alert("Products uploaded to Firestore!");
  } catch (err) {
    console.error(err);
  }
}
