
import express from  "express";
import userRoutes from "./routes/artistRouters.js";
import evantRoutes from "./routes/evantRouter.js"
import morgan from "morgan";
import bookingRoutes from "./routes/bookingRoutes.js"


const app= express();

app.use(morgan("dev"))
app.use(express.json());

app.use("/api/artists", userRoutes);
app.use("/api/eventinfo",evantRoutes)
app.use("/api/booking",bookingRoutes)



export default app;