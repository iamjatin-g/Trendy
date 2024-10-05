import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

// Route for User Login 

const loginUser = async (req, res) => {

    try {
        const {email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({success: false, message: 'All fields are required.' });
        }
        
        // Check if user's email exists in the database
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({success: false, message: 'User not found.' });
        }
        
        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({success: false, message: 'Invalid credentials.' });
        } else {
            // Create and return JWT token
            const token = createToken(user._id);
            return res.json({ success: true, message: "Login Successful", token });
        }

    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, message: error.message });
    }
}

// Route for User Registration

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // Check if all required fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        
        // Check if email is already registered
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(401).json({success: false, message: 'Email is already registered.' });
        }

        // Validating email format and strong password 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(403).json({ success: false, message: 'Invalid email format.' });
        }
        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(403).json({ success: false, message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.' });
        }
        
        // Hash the password
        // const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create a new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });
        
        // Save the user to the database
        const user = await newUser.save();
        
        // Generate and send JWT token
        const token = createToken(user._id);
        res.json({ success: true, message: "Registration Successful", token });

    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, message: error.message });
    }
}

// Route for Admin Login 

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if all required fields are provided
        if (!email ||!password) {
            return res.status(400).json({ success: false, message: 'All fields are required.' });
        }
        
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            return res.json({ success: true, message: "Admin Login Successful", token });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid credentials.' });
        }
        
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, message: error.message });
    }
}

export {loginUser, registerUser, loginAdmin} 