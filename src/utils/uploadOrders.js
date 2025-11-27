import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

// Dummy sample order
const dummyOrders = [
  {
    userId: "user123",
    items: [
      { id: "1", title: "Wireless Headphones", price: 1999, qty: 1 },
      { id: "2", title: "Smart Watch", price: 2999, qty: 1 },
    ],
    totalAmount: 4998,
    status: "completed",
    createdAt: new Date(),
  },
  {
    userId: "user456",
    items: [
      { id: "3", title: "Bluetooth Speaker", price: 1499, qty: 2 },
    ],
    totalAmount: 2998,
    status: "pending",
    createdAt: new Date(),
  },
];

export async function uploadAllOrders() {
  try {
    for (let o of dummyOrders) {
      await addDoc(collection(db, "orders"), o);
    }

    alert("Orders uploaded to Firestore!");
  } catch (err) {
    console.error(err);
  }
}
