import { createvant, getEvantEnfo } from "../controllers/EvantController.js";
import express from "express";


const router = express.Router();



router.get("/",getEvantEnfo)
router.post("/",createvant)


export default router;