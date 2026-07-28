const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// Register
const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            success: true,
            token: generateToken(user._id),
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
    console.error("========== REGISTER ERROR ==========");
    console.error(error);
    console.error(error.stack);
    console.error("====================================");

    return res.status(500).json({
        success: false,
        message: error.message
    });
}
};

// Login
const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(401).json({
                success: false,
                message: "Invalid Email"
            });

        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {

            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            });

        }

        res.json({

            success: true,

            token: generateToken(user._id),

            user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    registerUser,

    loginUser

};