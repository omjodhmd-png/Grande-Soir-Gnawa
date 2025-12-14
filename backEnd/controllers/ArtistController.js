import Artist from '../models/Artist.js';




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




