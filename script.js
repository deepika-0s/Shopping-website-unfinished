gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION
gsap.from(".reveal", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  stagger: 0.2
});

// LENIS
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// CART SYSTEM
let cart = [];

const cartPanel = document.getElementById("cart-panel");
const cartOverlay = document.getElementById("cart-overlay");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

document.querySelector(".cart-icon").addEventListener("click", () => {
  cartPanel.classList.add("active");
  cartOverlay.classList.add("active");
});

document.getElementById("close-cart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

function closeCart() {
  cartPanel.classList.remove("active");
  cartOverlay.classList.remove("active");
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price}</span>
    `;

    cartItems.appendChild(div);
  });

  cartTotal.innerText = total;
  cartCount.innerText = cart.length;
}