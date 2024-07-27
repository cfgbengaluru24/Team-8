import Trainer from "../models/trainerModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import sendToken from "../utils/jwtToken.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from 'crypto'
import cloudinary from "cloudinary"

//Register a user

const registerTrainer = catchAsyncError(async (req, res, next) => {

    const { name, email, password } = req.body

    const newTrainer = await Trainer.create({
        name, email, password
    })

    sendToken(newTrainer, 201, res)
})

export default registerTrainer