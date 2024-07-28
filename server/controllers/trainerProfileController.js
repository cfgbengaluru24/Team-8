import TrainerProfile from "../models/trainerProfileModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import sendToken from "../utils/jwtToken.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from 'crypto'
import cloudinary from "cloudinary"

//Register a user

const registerTrainerProfile = catchAsyncError(async (req, res, next) => {

    const { phone, city, languages, SHG,name, email   } = req.body

    const newTrainerProfile = await TrainerProfile.create({
        phone, city, languages, SHG , name , email 
    })

    res.status(200).json({
        success: true,
        newTrainerProfile
    })
})

const getTrainerProfile = catchAsyncError(async (req, res, next) => {


    const data = await TrainerProfile.find({}).toArray()

    if (!data) {
        return next(new ErrorHandler("First Complete The Profile", 404));
    }

    res.status(200).json({
        success: true,
        data
    })
})

export default registerTrainerProfile
export {getTrainerProfile}