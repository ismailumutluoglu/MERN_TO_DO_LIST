import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"
import rateLimit from "./config/upstash.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
const app = express()
const PORT = process.env.PORT || 5002 

//middleware
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
}))
app.use(express.json());
app.use(rateLimiter)
// app.use((req,res,next) =>{
//     console.log(`req method is ${req.method} , % req URL is ${req.url}`);
//     next();
// })

app.use("/api/notes",notesRoutes);
connectDB().then(()=>
{
    app.listen(PORT , () =>
    {
    console.log("Server started at PORT:",PORT);
    });    
});


