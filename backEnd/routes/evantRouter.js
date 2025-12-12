import { getEvantEnfo } from "../controllers/EvantController.js";
import express from "express";


const router = express.Router();



router.get("/",getEvantEnfo)


export default router;