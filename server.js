import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import cors from "cors";


// config env
dotenv.config();

// database config
connectDB(); 

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth",authRoutes);

//api
app.get('/',(req,res)=>{
    res.send({
        message: "welcome to the walhouse",
    })
})


//PORT
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running in ${process.env.MODE} mode on ${PORT} port`.cyan.italic.bold);
});


// mongodb+srv://porwal8840:<password>@cluster0.vnnpzhl.mongodb.net/?retryWrites=true&w=majority