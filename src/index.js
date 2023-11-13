// use try catch and async await in every database code 
// it is very good practice 

// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/indexDb.js";

dotenv.config({
    path: './env'
})

connectDB()



// import { express } from "express";

// const app = express()

// (async ()=>{
//     try{
//       await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`)
//       app.on("error", (error)=>{
//         console.log("error");
//         throw error
//       })

//       app.listen(process.env.PORT, () =>{
//         console.log(`DB Connected on ${process.env.PORT}`);
//       })

//     }catch(error){
//        console.error("ERROR: ", error)
//        throw err
//     }
// })()