import mongoose from "mongoose";

// Define the schema
const userSchema = new mongoose.Schema({
  userid: { type: String, required: true, unique: true }, // Ensure unique user IDs
  name: { type: String, required: true }, // User's name
  email: { type: String, required: true, unique: true }, // User's email
  phonenumber: { type: String, required: true }, // User's phone number
  city: { type: String }, // City where the user lives
  lang: [{ type: String }] // Array of languages
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Create the model
const People = mongoose.model('People', userSchema);

export default People