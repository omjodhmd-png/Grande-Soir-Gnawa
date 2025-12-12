import EventInfo from "../models/Evantinfo.js";


export const getEvantEnfo = async(req,res)=>{
    try {
        const evantenfo = await EventInfo.findOne();
        res.status(201).json(evantenfo);
    
    } catch (error) {
       res.status(500).json({error:error.message}) 
    }
}
export const createvant = async (req,res)=>{
    try {
        const evant=await EventInfo.create(req.body);
        res.status(201).json({message:"event is created"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const updateEvent = async (req, res) => {
    try {
      const { id } = req.params; 
  
      const updated = await EventInfo.update(req.body, {
        where: { id }
      });
  
      // updated: [1] = row updated , [0] = no row updated
      if (updated[0] === 0) {
        return res.status(404).json({ message: "Event not found" });
      }
  
      res.status(200).json({ message: "Event updated successfully" });
  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
