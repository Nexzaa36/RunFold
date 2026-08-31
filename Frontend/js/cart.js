// Get Cart
function getCart() {

    return JSON.parse(localStorage.getItem("cart")) || [];

}

// Save Cart
function saveCart(cart) {

    localStorage.setItem("cart", JSON.stringify(cart));

}

// Add Product
function addToCart(product) {

    let cart = getCart();

    const existingProduct = cart.find(
        item => item._id === product._id
    );

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        product.quantity = 1;

        cart.push(product);

    }

    saveCart(cart);

    updateCartCount();

    alert("Product Added Successfully!");

}

// Update Cart Count
function updateCartCount() {

    const cart = getCart();

    const cartCount = document.getElementById("cartCount");

    if (!cartCount) return;

    let totalItems = 0;

    cart.forEach(item => {

        totalItems += item.quantity;

    });

    cartCount.innerText = totalItems;

}

updateCartCount();

function loadCart(){

    const cart = getCart();

    const cartItems = document.getElementById("cartItems");

    const totalPrice = document.getElementById("cartTotal");

    if(!cartItems) return;

    cartItems.innerHTML="";

    let total=0;

    cart.forEach(product=>{

        total += product.price * product.quantity;

        cartItems.innerHTML += `

    <div class="cart-item">

        <img src="${product.image}">

        <div class="cart-details">

            <h2>${product.name}</h2>

            <p>Price : ₹${product.price}</p>

            <div class="quantity-box">

                <button onclick="decreaseQuantity('${product._id}')">−</button>

                <span>${product.quantity}</span>

                <button onclick="increaseQuantity('${product._id}')">+</button>

        </div>

        <p>Subtotal : ₹${product.price * product.quantity}</p>
        <button class="remove-btn"
            onclick="removeProduct('${product._id}')">
            🗑 Remove
        </button>

    </div>

</div>

`;

    });

    totalPrice.innerText=`₹${total}`;

}

loadCart();

function increaseQuantity(id){

    let cart = getCart();

    const product = cart.find(item => item._id === id);

    if(product){

        product.quantity++;

    }

    saveCart(cart);

    loadCart();

    updateCartCount();

}

function decreaseQuantity(id){

    let cart = getCart();

    const product = cart.find(item => item._id === id);

    if(product){

        product.quantity--;

        if(product.quantity <= 0){

            cart = cart.filter(item => item._id !== id);

        }

    }

    saveCart(cart);

    loadCart();

    updateCartCount();

}

function removeProduct(id){

    let cart = getCart();

    cart = cart.filter(item => item._id !== id);

    saveCart(cart);

    loadCart();

    updateCartCount();

}

const checkoutBtn = document.getElementById("checkoutBtn");

if(checkoutBtn){

    checkoutBtn.onclick=()=>{

        window.location.href="checkout.html";

    };

}