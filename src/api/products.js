import { v4 as uuid } from "uuid";

const products = [
  {
    id: "1",
    title: "Wireless Headphones",
    price: 1999,
    category: "Electronics",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT6udDgy8dVre4qoyup5JY-Tja4JwvPiwDBJ9Qu5DIcCi3dtZDGLi76ykE7DbseVpogbywYCj2VnXNC838HloNKdpy4YxdSsVFmlrbU4B_p6ikhnT_fNa2thQ",
    description: "Comfortable wireless headphones.",
    reviews: [
      { id: uuid(), user: "Anu", rating: 5, text: "Excellent!" },
      { id: uuid(), user: "Ravi", rating: 4, text: "Good value." }
    ]
  },
  {
    id: "2",
    title: "Smart Watch",
    price: 2999,
    category: "Electronics",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMjZQlGv53Fr0pNwu1_uiFVPHE5zmrgpjIr0oYqwaDDvu8fQADp6dsdFVA4CqAuBwL6YOgq5plaBxM_hJQlW_KWlUMQDOV5KAU-zDJA99irbqwbY8WDYdwPA",
    description: "Smart watch with health features.",
    reviews: []
  },
  {
    id: "4",
    title: "Bluetooth Speaker",
    price: 1799,
    category: "Electronics",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQo3vYUuj4BH28eM5K_yHDIWuXZ_1NaOR-6KToA1SXnruFThiWmEzMT5Y8iZKEMFhv8QAUfya6KaQVsJTWV39GsXbBLcBpbc-Hn23K3vG4",
    description: "Portable Bluetooth speaker with rich bass.",
    reviews: []
  },
  {
    id: "5",
    title: "Fitness Band",
    price: 1999,
    category: "Electronics",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRn6XL6LkPfGH6eGkGAskjiuoRI5UbxEkmPWTVMfFTvMGv4pdCi50xQyDuHGiaQAVrPZ70a-iIppZsljCiltck0nwGII7ipUYX6vfZgyGFRPbu6rVWhsGDn",
    description: "Fitness band with heart rate monitor.",
    reviews: []
  },
  {
    id: "6",
    title: "Tablet",
    price: 15999,
    category: "Electronics",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQqfPnG72Hg37e-raiMHUeO5bM-QmSj4QPqzpdWD0Z3B2hN2sX5EvN5i6HLU5m1yRW-bfiOYULX21m71qvuVeIBm6N0Y6oQ_01Y-r-5-jpsDKOqA5wtJlbp3Gs",
    description: "10-inch tablet with high-resolution display.",
    reviews: []
  },
  {
    id: "7",
    title: "Gaming Mouse",
    price: 1299,
    category: "Electronics",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJSU7fUqKErMjArnczkjg2I0gkeBqv423pIMNSeolnrDk-oxHLf2rd02948ikOF12zCWr6AETFHaYVgau53hpPNm9HkkOs1QN3WntWOnkzc5fhA1e0rDTo",
    description: "RGB gaming mouse with precision sensor.",
    reviews: []
  },
  {
    id: "8",
    title: "Power Bank",
    price: 1499,
    category: "Electronics",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnVH199gnMzvO3Mxln6E8N8jogwl9sogqgA_bwxLfBO99kxJGmSHYkzwvx79_HVkrMZH0Jpxya0qRhQzvWFppo9y2oGDWUMqtPdSmh1pb4AioR084B6m-xAw",
    description: "10000mAh fast charging power bank.",
    reviews: []
  },
  {
    id: "9",
    title: "Mechanical Keyboard",
    price: 3999,
    category: "Electronics",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQIsriZ5eBXe51syDL7UQrP0Fg8XOrYM0U_QAnDpFRPhPkjGUo9L_WfVOm_Mpq2xpoYdN2PkuCjDcYMbyS0rHma7o5ZbzY98_qdiUoXwaLaDGedG2sL38M1Wg",
    description: "Mechanical keyboard with blue switches.",
    reviews: []
  },
  {
    id: "10",
    title: "Laptop Bag",
    price: 899,
    category: "Fashion",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRD68aHsQTtfItT0oB29kjymvGQWpeZEyF4GwSpWqdhSItuSVNdE4JdyuYO2vkqQnX9I8PjzqKUyDM7Cjoi_qMildNlOrEN8bY_ib4quW7xLg5UxVLwcfJ",
    description: "Water-resistant laptop bag with padding.",
    reviews: []
  },
  {
    id: "11",
    title: "Web Camera",
    price: 2999,
    category: "Electronics",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5O37oHyWf1NAzNAVc8f6zGxXdrrVRsCEyKooiMNNuE-KWWAq0Y9vwKI4wzzA7XaJEMnJWNEf6LMZU4XEuEblPeaPV9xjWh2XEdH0PCuwsd2FbukGPlttH",
    description: "HD web camera for video conferencing.",
    reviews: []
  },
  {
    id: "12",
    title: "External Hard Drive",
    price: 4999,
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/41eFUZh+nHL._AC_UF1000,1000_QL80_.jpg",
    description: "1TB external hard drive for storage.",
    reviews: []
  },
  {
    id: "13",
    title: "External Hard Drive",
    price: 4999,
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/41eFUZh+nHL._AC_UF1000,1000_QL80_.jpg",
    description: "1TB external hard drive for storage.",
    reviews: []
  },
   {
    id: "14",
    title: "Realme",
    price: 24999,
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/41Xhb2WaWSL._SY300_SX300_QL70_FMwebp_.jpg",
  
    description: "Realme Phone",
    reviews: []
  }
];

export default products;

