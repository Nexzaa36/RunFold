# RunFold

**RunFold** is a multi-brand e-commerce platform where users can shop from multiple brands under one roof.

## Backend Folder Structure

```text
backend/
│
├── config/
│   └── db.js                  # MongoDB connection
│
├── controllers/
│   ├── authController.js      # User authentication
│   ├── productController.js   # Product operations
│   ├── cartController.js      # Cart management
│   └── orderController.js     # Order management
│
├── middleware/
│   └── authMiddleware.js      # JWT authentication middleware
│
├── models/
│   ├── User.js                # User schema
│   ├── Product.js             # Product schema
│   ├── Cart.js                # Cart schema
│   └── Order.js               # Order schema
│
├── routes/
│   ├── authRoutes.js          # Authentication routes
│   ├── productRoutes.js       # Product routes
│   ├── cartRoutes.js          # Cart routes
│   └── orderRoutes.js         # Order routes
│
├── uploads/                   # Uploaded product images
│
├── .env                       # Environment variables
├── .gitignore                 # Ignored files
├── package.json               # Project dependencies
└── server.js                  # Application entry point
```
