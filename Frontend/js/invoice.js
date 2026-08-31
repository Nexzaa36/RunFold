const order = JSON.parse(localStorage.getItem("lastOrder"));

document.getElementById("invoiceNo").innerText =
order._id.slice(-6).toUpperCase();

document.getElementById("customerName").innerText =
order.shippingAddress.fullName;

document.getElementById("customerPhone").innerText =
order.shippingAddress.phone;

document.getElementById("customerAddress").innerText =
order.shippingAddress.address;

document.getElementById("total").innerText =
order.totalPrice;

const list = document.getElementById("productList");

let message = `🧾 RUNFOLD ORDER\n\n`;

order.orderItems.forEach(item=>{

    list.innerHTML += `
        <p>
            ${item.name}
            × ${item.quantity}
            - ₹${item.price}
        </p>
    `;

    message += `${item.name} x${item.quantity} - ₹${item.price}\n`;

});

message += `

Total : ₹${order.totalPrice}

Customer :
${order.shippingAddress.fullName}

Phone :
${order.shippingAddress.phone}

Address :
${order.shippingAddress.address}
`;

document.getElementById("whatsappBtn")
.addEventListener("click",()=>{

window.open(
`https://wa.me/+917020045825?text=${encodeURIComponent(message)}`
);

});

document.getElementById("downloadBtn")
.addEventListener("click", () => {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(22);
    doc.text("RUNFOLD", 80, y);

    y += 15;

    doc.setFontSize(16);
    doc.text("Order Invoice", 20, y);

    y += 15;

    doc.setFontSize(12);

    doc.text(
        `Invoice No : ${order._id.slice(-6).toUpperCase()}`,
        20,
        y
    );

    y += 10;

    doc.text(
        `Customer : ${order.shippingAddress.fullName}`,
        20,
        y
    );

    y += 10;

    doc.text(
        `Phone : ${order.shippingAddress.phone}`,
        20,
        y
    );

    y += 10;

    doc.text(
        `Address : ${order.shippingAddress.address}`,
        20,
        y
    );

    y += 20;

    doc.setFontSize(15);

    doc.text("Products",20,y);

    y += 10;

    order.orderItems.forEach(item=>{

        doc.text(
            `${item.name}   x${item.quantity}    Rs. ${item.price}`,
            20,
            y
        );

        y += 10;

    });

    y += 10;

    doc.setFontSize(16);

    doc.text(
        `Total :  Rs. ${order.totalPrice}`,
        20,
        y
    );

    y += 20;

    doc.setFontSize(12);

    doc.text(
        "Thank you for shopping with RUNFOLD ",
        20,
        y
    );

    doc.save(`RUNFOLD-Invoice-${order._id.slice(-6)}.pdf`);

});