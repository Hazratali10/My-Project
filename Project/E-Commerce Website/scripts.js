let cart = [];
let totalPrice = 0;

function addToCart(id, name, price) {
  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.id === id);
  
 /*  if (existingProduct) {
    alert(name + ' is already in your cart!');
    return;
  } */

  // Add new product to the cart
  cart.push({ id, name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const totalPriceElement = document.getElementById('total-price');

  // Clear the cart items list
  cartItems.innerHTML = '';

  // Update cart items
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerText = `${item.name} - $${item.price}`;
    cartItems.appendChild(listItem);
  });

  // Update total price
  totalPrice = cart.reduce((total, item) => total + item.price, 0);
  totalPriceElement.innerText = totalPrice.toFixed(2);

  // Update cart count
  cartCount.innerText = cart.length;
  
  // If cart is empty
  if (cart.length === 0) {
    cartItems.innerHTML = '<li>No items in cart yet.</li>';
  }
}
