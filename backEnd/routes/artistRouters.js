import express from "express";
import { createArtist, getAllArtist, getArtist } from '../controllers/ArtistController.js'



const router = express.Router();

router.post("/", createArtist );
router.get("/", getAllArtist);
router.get("/:id", getArtist)

export default router;
