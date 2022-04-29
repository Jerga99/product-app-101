

async function fetchProducts() {
  const response = await fetch("https://product-app-101-server.vercel.app/api/products");
  return response.json();
}