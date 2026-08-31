const cart = JSON.parse(localStorage.getItem("cart")) || [];
const user = JSON.parse(localStorage.getItem("user"));
if (!user) {

    alert("Please login first.");

    window.location.href = "login.html";

    throw new Error("User not logged in");

}

// Calculate Total
let total = 0;

cart.forEach(item => {
    total += item.price * item.quantity;
});

// Show Total
document.getElementById("checkoutTotal").innerText = `₹${total}`;

// Place Order
document.getElementById("checkoutForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const fullName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const orderData = {

        user: user._id,

        orderItems: cart.map(item => ({
            product: item._id,
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: item.quantity
        })),

        shippingAddress: {
            fullName,
            phone,
            address
        },

        totalPrice: total

    };

    try {

        const response = await fetch("https://run-fold-01.vercel.app/api/orders", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(orderData)

        });

        const data = await response.json();

       if(data.success){

                localStorage.setItem(
                "lastOrder",
                JSON.stringify(data.order)
            );

            localStorage.removeItem("cart");

            window.location.href="invoice.html";

        } else {

            alert(data.message);

        }

    } catch (err) {

        console.log(err);

        alert("Server Error");

    }

});
