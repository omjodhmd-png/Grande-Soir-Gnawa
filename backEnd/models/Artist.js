import {DataTypes} from "sequelize";
import sequelize from "../config/db.js";



const Artist = sequelize.define("Artist", {
    name :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    speciality:{
        type:DataTypes.STRING,
        allowNull:false
    },
    bio:{
        type:DataTypes.STRING,
        allowNull:false

    },
    image_url:{
        type:DataTypes.STRING,
        allowNull:false
    },
    performance_time:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price_vip:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    price_standard:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

});
export default Artist;