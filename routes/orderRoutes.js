const express = require("express");

const {

    createOrder,

    getMyOrders

} = require("../controllers/orderController");

const router = express.Router();

// Create Order
router.post("/", createOrder);

// Get Orders of a User
router.get("/:userId", getMyOrders);

module.exports = router;