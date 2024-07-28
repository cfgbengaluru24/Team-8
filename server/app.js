import express from 'express'
import cookieParser from "cookie-parser";
import errorMiddleware from './middleware/error.js';
import cors from "cors"
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv'
import path from 'path';


if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: "config/config.env" })
}
else {
    dotenv.config()
}

const app=express();

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())


app.use(cors({
    origin: true, //allow request only from these site
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true, //for getting cookies and other headers from backend
}))


//Route Import

import adminRoutes from "./routes/adminRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import trainerRoutes from "./routes/trainerRoutes.js"
import shgRouters from "./routes/shgRouters.js"
import surveyRouter from "./routes/serveyRouter.js"
import profileRouter from "./routes/profileRoutes.js"

app.use("/api/v1",adminRoutes)
app.use("/api/v1",userRoutes)
app.use("/api/v1/trainer",trainerRoutes)
app.use("/api/v1/trainer",shgRouters)
app.use("/api/v1/surveyData", surveyRouter);
app.use("/api/v1/profile",profileRouter);

app.get("/",(req,res)=>{
    res.send("welcome to home page")
})

// Middleware for error

app.use(errorMiddleware)

export default app;