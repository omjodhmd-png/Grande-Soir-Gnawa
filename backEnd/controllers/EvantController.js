import EventInfo from "../models/Evantinfo.js";


export const getEvantEnfo = async(req,res)=>{
    try {
        const evantenfo = await EventInfo.findOne();
        res.status(201).json(evantenfo);
    
    } catch (error) {
       res.status(500).json({error:error.message}) 
    }
} 
  
