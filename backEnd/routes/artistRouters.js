import express from "express";
import {  getAllArtist, getArtist, } from '../controllers/ArtistController.js'



const router = express.Router();

router.get("/", getAllArtist);
router.get("/:id", getArtist)

export default router;
