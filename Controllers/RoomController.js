import RoomModel from "../Model/RoomModel.js";
import HotelModel from "../Model/HotelModel.js";
export const createRoom = async(req,res) =>{
    const hotelid =req.params.hotelid;
    const newRoom = new RoomModel(req.body);
    try {
        const room = await newRoom.save();
        try {
            await HotelModel.findByIdAndUpdate(hotelid,{$push:{rooms:room._id}})
            
        } catch (error) {
            res.status(500).json(error)
        }
        res.status(200).json(room)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateRoom = async(req,res)=>{
    const id = req.params.id
    try {
        const updatedRoom = await RoomModel.findByIdAndUpdate(id,{$set:req.body},{new:true});
        
            res.status(200).json(updatedRoom)
        
    } catch (error) {
        res.status(500).json(error)
    }
}
export const deleteRoom = async(req,res)=>{
    const hotelid =req.params.hotelid;
    try {
        await RoomModel.findByIdAndDelete(req.params.id);
        try {
            await HotelModel.findByIdAndUpdate(hotelid,{$pull:{rooms:req.params.id}})
            
        } catch (error) {
            res.status(500).json(error)
        }
        res.status(200).json('room deleted')
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getAllRooms = async(req,res)=>{
    try {
        const rooms = await RoomModel.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getRoom = async(req,res)=>{
    const id = req.params.id
    try {
        const room = await RoomModel.findById(id);
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json(error)
    }
}