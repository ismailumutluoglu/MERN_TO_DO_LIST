import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"
import dotenv from "dotenv"
import rateLimit from "./config/upstash.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
const app = express()
const PORT = process.env.PORT || 5002 

//middleware
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


