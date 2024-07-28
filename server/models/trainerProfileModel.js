import mongoose from "mongoose"
import validator from "validator"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import crypto from 'crypto'
import { create } from "domain"
import { type } from "os"

const trainerProfileSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true
    }, 
    email : {
         type : String , 
         required : true
    },
    phone: {
        type: Number,
        required: [true, "Please Enter Correct Number"],
        minLength: [10, "Password should have atleast 8 character"],
    },
    city: {
        type: String,
        required: [true, "Please Enter Your city"],
        minLength: [4, "City name should have atleast 4 characters"],
    },
    languages: {
        type: [String],
        default: []
    },
   
})


const TrainerProfile = mongoose.model("TrainerProfile", trainerProfileSchema)

export default TrainerProfile