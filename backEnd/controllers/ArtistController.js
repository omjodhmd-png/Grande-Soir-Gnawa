import Artist from '../models/Artist.js';
import { Op } from "sequelize";








export const getAllArtist = async (req ,res)=>{
    try {
        const artist = await Artist.findAll();
        res.status(201).json(artist);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const getArtist=async (req,res)=>{
    try {
        const {id}=req.params;
        const artist=await Artist.findOne({where:{id}});
        if(!artist){
         return res.status(404).json({message:"artist not found"})}
        res.status(200).json(artist)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const getArtistSearch = async (req, res) => {
    try {
      const { search } = req.query;
  
      let whereCondition = {};
  
      if (search) {
        whereCondition = {
          [Op.or]: [
            { name: { [Op.iLike]: `%${search}%` } },        // PostgreSQL, case-insensitive
            { speciality: { [Op.iLike]: `%${search}%` } },
          ],
        };
      }
  
      const artists = await Artist.findAll({ where: whereCondition });
      res.json({ artists });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  };