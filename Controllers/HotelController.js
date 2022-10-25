import HotelModel from "../Model/HotelModel.js";

export const createHotel = async(req,res)=>{
    const newHotel = new HotelModel(req.body)
    try {
        const hotel = await newHotel.save();
        if(hotel){
            res.status(200).json(hotel)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};

export const updateHotel = async(req,res)=>{
    const id = req.params.id
    try {
        const updatedHotel = await HotelModel.findByIdAndUpdate(id,{$set:req.body},{new:true});
        
            res.status(200).json(updatedHotel)
        
    } catch (error) {
        res.status(500).json(error)
    }
}
export const deleteHotel = async(req,res)=>{
    const id = req.params.id
    try {
        const deleteHotel = await HotelModel.findByIdAndDelete(id);
        res.status(200).json(deleteHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getAllHotels = async(req,res)=>{
    try {
        const hotels = await HotelModel.find();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getHotel = async(req,res)=>{
    const id = req.params.id
    try {
        const hotel = await HotelModel.findById(id);
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json(error)
    }
}