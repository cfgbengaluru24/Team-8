import mongoose from "mongoose"
import validator from "validator"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import crypto from 'crypto'
import { create } from "domain"

const trainerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 character"],
        minLength: [4, "Name should have atleast 4 character"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Name"],
        unique: [true, "email already exists"],
        validator: [validator.isEmail, "Please Enter a Valid Email"]
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should have atleast 8 character"],
        select: false
    },
    role: {
        type: String,
        default: "trainer"
    }
})

trainerSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
})

trainerSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

trainerSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const Trainer = mongoose.model("Trainer", trainerSchema)

export default Trainer