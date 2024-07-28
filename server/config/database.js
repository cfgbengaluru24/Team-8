import mongoose from "mongoose";

import dotenv from 'dotenv'


if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: "config/config.env" })
}
else {
    dotenv.config()
}

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI,{
        dbName: "BPF"
    }).then((data)=>{
        console.log(`mondodb is connected with server: ${data.connection.host}`)
    })
}

export default connectDatabase