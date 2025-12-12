import {DataTypes} from "sequelize";
import sequelize  from "../config/db.js";

const EventInfo =sequelize.define("EventInfo",{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,

    },
    date:{
        type:DataTypes.STRING,
    },
    location:{
        type:DataTypes.STRING
    },
    coverImage:{
        type:DataTypes.STRING
    },
   

})
export default EventInfo;