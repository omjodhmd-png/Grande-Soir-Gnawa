import express from "express";
import {  getAllArtist, getArtist,getArtistSearch } from '../controllers/ArtistController.js'



const router = express.Router();

router.get("/", getAllArtist);
router.get("/:id", getArtist)
router.get("/", getArtistSearch);

export default router;
