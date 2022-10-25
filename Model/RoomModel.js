import mongoose from "mongoose";
const Schema = mongoose.Schema

const RoomSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    maxPeople:{
        type:Number,
        required:true
    },
    roomNumbers:[{number:Number,unavalibaleDates:[{type:Date}]}]
},{timestamps:true})
const RoomModel = mongoose.model('Room',RoomSchema);
export default RoomModel