import mongoose from "mongoose"
import validator from "validator"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import crypto from 'crypto'


const userSchema = new mongoose.Schema({
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
        default: "user"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
})

//JWT token

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

//compare password

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

// generating password reset token
userSchema.methods.getResetPasswordToken = function () {

    //generating token
    const resetToken = crypto.randomBytes(20).toString("hex")

    // Hashing and added to user schema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken
}


const User = mongoose.model("User", userSchema)

export default User