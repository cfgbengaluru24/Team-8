import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import sendToken from "../utils/jwtToken.js";
import User from "../models/UserModel.js";
import Trainer from "../models/trainerModel.js";

//Register a user

const registerUser = catchAsyncError(async (req, res, next) => {

    const { name, email, password } = req.body

    const newUser = await User.create({
        name, email, password,
    })

    sendToken(newUser, 201, res)
})

const loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return next(new ErrorHandler("Please enter valid email and password", 400))
    }

    var newUser = await User.findOne({ email }).select("+password")
    if(!newUser){
        newUser = await Trainer.findOne({ email }).select("+password")
    }

    if (!newUser) {
        return next(new ErrorHandler("Invalid Credentials", 401))
    }
    const isMatched = await newUser.comparePassword(password)
    if (!isMatched) {
        return next(new ErrorHandler("Invalid Credentials", 401))
    }

    sendToken(newUser, 200, res)
})

const logoutUser = catchAsyncError(async (req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "logout successfully"
    })
})

const getUserDetails = catchAsyncError(async (req, res, next) => {
    const user = await Trainer.find({})

    res.status(200).json({
        success: true,
        user
    })
})

export default registerUser
export {loginUser,logoutUser,getUserDetails}