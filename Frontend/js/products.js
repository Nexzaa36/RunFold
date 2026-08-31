const API = "http://localhost:5000/api/products";

async function loadProducts() {

    try {

        const response = await fetch(API);

        const data = await response.json();

        if (!data.success) return;

        const discover = document.getElementById("discoverProducts");
        const nike = document.getElementById("nikeProducts");
        const puma = document.getElementById("pumaProducts");
        const adidas = document.getElementById("adidasProducts");

        discover.innerHTML = "";
        nike.innerHTML = "";
        puma.innerHTML = "";
        adidas.innerHTML = "";

        data.products.forEach(product => {
        console.log(product.name, product.section);
        
    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <img src="${product.image}">
        <h2>${product.name}</h2>
        <p>₹${product.price}</p>
       <button class="cart-btn">
            Add To Cart
        </button>
    `;

    const button = card.querySelector(".cart-btn");

    button.addEventListener("click", () => {

        addToCart(product);

    });

    if(product.section === "discover"){
        discover.appendChild(card);
    }

    if(product.section === "nike"){
        nike.appendChild(card);
    }

    if(product.section === "puma"){
        puma.appendChild(card);
    }

    if(product.section === "adidas"){
        adidas.appendChild(card);
    }

});

    }

    catch(error){

        console.log(error);

    }

}

loadProducts();