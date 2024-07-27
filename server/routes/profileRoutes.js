import express from "express"
const router = express.Router();
import People from "../models/profileModel.js" // Adjust the path to your User model

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const { userid, name, email, phonenumber, city, lang } = req.body;

    // Validate input
    if (!userid || !name || !email || !phonenumber) {
      return res.status(400).json({ success: false, message: 'Required fields are missing' });
    }

    // Create a new user
    const user = new People({ userid, name, email, phonenumber, city, lang });
    await user.save();

    res.status(201).json({ success: true, data: user, message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create user', error: error.message });
  }
});

export default router;