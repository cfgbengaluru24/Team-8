import express from 'express';
import mongoose from 'mongoose';
import Form from "../models/formModel.js";

const router = express.Router();

router.post('/', async (req, res) => {
  const formData = req.body; // Assuming the entire form data is sent in the request body

  try {
    const form = new Form({ formData });
    await form.save();
    return res.status(201).json({ message: 'Form submitted successfully.', form });
  } catch (error) {
    console.error('Error submitting form:', error);
    return res.status(500).json({ error: 'An error occurred while submitting the form.' });
  }
});

export default router;
