const products = [
  { name: "เมาส์",      price: 350,  inStock: true  },
  { name: "คีย์บอร์ด",   price: 1200, inStock: true  },
  { name: "จอมอนิเตอร์",  price: 4500, inStock: false },
  { name: "หูฟัง",      price: 890,  inStock: true  },
  { name: "ลำโพง",      price: 1500, inStock: false }
];

// 1) map
const labels = products.map(p => `${p.name} ราคา ${p.price} บาท`);
console.log(labels);

// 2) filter
const cheapInStock = products.filter(p => p.inStock && p.price <= 1000);
console.log(cheapInStock);

// 3) reduce ต่อจาก filter
const totalInStock = products
  .filter(p => p.inStock)
  .reduce((sum, p) => sum + p.price, 0);
console.log(totalInStock);  // 2440

// 4) spread เพิ่มสินค้าแบบไม่แก้ของเดิม
const newProducts = [...products, { name: "เว็บแคม", price: 990, inStock: true }];
console.log(products.length, newProducts.length);  // 5 6