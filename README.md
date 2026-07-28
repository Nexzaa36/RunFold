# 👟 RUNFOLD

RUNFOLD is a Full Stack E-Commerce Shoe Store built using the MERN Stack (MongoDB, Express.js, Node.js, Vanilla JavaScript, HTML, and CSS). It allows users to browse products, register/login, add items to cart, place orders, generate invoices, download PDF bills, and submit feedback.

---

# 🚀 Features

## Authentication
- User Registration
- User Login
- JWT Authentication
- Logout Functionality
- Persistent Login using LocalStorage

## Products
- Dynamic Product Fetching from MongoDB
- Multiple Brand Sections
    - Nike
    - Puma
    - Adidas
    - Discover
- Product Images
- Product Prices
- Add To Cart

## Cart
- Add Products
- Increase Quantity
- Decrease Quantity
- Remove Product
- Cart Count Badge
- Total Amount Calculation
- Cart Persistence using LocalStorage

## Checkout
- Shipping Details Form
- Order Summary
- Place Order
- Store Orders in MongoDB

## Orders
- User Order History
- Order Status
- Shipping Information
- Total Price
- Populate User Information

## Invoice System
- Automatic Invoice Generation
- Download Invoice as PDF
- WhatsApp Invoice Sharing

## Feedback
- Customer Feedback Form
- Store Feedback in MongoDB
- Retrieve Feedback using API

---

# 🛠 Tech Stack

## Frontend
- HTML5
- CSS3
- JavaScript
- Font Awesome
- LocalStorage

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- CORS

## Database
- MongoDB Atlas

---

# 📂 Project Structure

RUNFOLD

```
RUNFOLD
│
├── frontend
│   │
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── cart.html
│   ├── checkout.html
│   ├── invoice.html
│   ├── dashboard.html
│   │
│   ├── style.css
│   ├── dashboard.css
│   │
│   └── js
│       ├── products.js
│       ├── cart.js
│       ├── checkout.js
│       ├── invoice.js
│       ├── login.js
│       ├── register.js
│       ├── dashboard.js
│       └── index.js
│
├── backend
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── feedbackController.js
│   │
│   ├── models
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Feedback.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   └── feedbackRoutes.js
│   │
│   ├── config
│   │   └── db.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
```

---

# ⚙ Installation

## Frontend

Open:

```bash
index.html
```

using Live Server.

---

## Backend

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Start production server:

```bash
npm start
```

---

# 🔐 Environment Variables

Create:

```bash
.env
```

Inside backend:

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY
```

---

# 📡 API Endpoints

## Authentication

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

---

## Products

### Get All Products

```
GET /api/products
```

### Get Product By ID

```
GET /api/products/:id
```

### Add Product

```
POST /api/products
```

### Update Product

```
PUT /api/products/:id
```

### Delete Product

```
DELETE /api/products/:id
```

---

## Orders

### Create Order

```
POST /api/orders
```

### Get User Orders

```
GET /api/orders/:userId
```

---

## Feedback

### Submit Feedback

```
POST /api/feedback
```

### Get All Feedback

```
GET /api/feedback
```

---

# 🗄 MongoDB Collections

```
users
products
orders
feedbacks
```

---

# 🛒 Order Flow

```
Register
   ↓
Login
   ↓
Browse Products
   ↓
Add To Cart
   ↓
Checkout
   ↓
Place Order
   ↓
Invoice Generated
   ↓
Download PDF
   ↓
WhatsApp Share
   ↓
Order Stored In MongoDB
```

---

# 🎯 Future Improvements

- Admin Dashboard
- Payment Gateway Integration
- Wishlist
- Search Functionality
- Product Filters
- Coupon System
- Email Notifications
- Inventory Management
- Image Upload System
- Order Tracking

---

# 👨‍💻 Author

### Ayush Joshi

RUNFOLD was built as a Full Stack MERN E-Commerce Project for learning backend development, API integration, MongoDB, authentication, and full-stack application architecture.

---

# ⭐ RUNFOLD

### Shop With Freedom.
