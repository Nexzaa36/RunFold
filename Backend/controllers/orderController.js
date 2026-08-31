const Order = require("../models/Order");

// Create New Order
const createOrder = async (req, res) => {

    try {

        const order = await Order.create(req.body);

        res.status(201).json({

            success: true,

            order

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// Get Logged-in User Orders
const getMyOrders = async (req, res) => {

    try {

        const orders = await Order.find({
        user: req.params.userId
        }).populate("user", "name email");

        res.status(200).json({

            success: true,

            count: orders.length,

            orders

        });

    } 
    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    createOrder,

    getMyOrders

};