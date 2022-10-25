import express  from "express";
import {createHotel, deleteHotel, getAllHotels, getHotel, updateHotel} from '../Controllers/HotelController.js'
const route = express.Router();
//CREATE
route.post('/',createHotel);
// UPDATE
route.put('/:id',updateHotel);
// DELETE
route.delete('/:id',deleteHotel);
//GET ALL
route.get('/',getAllHotels)
// GET SINGLE ONE 
route.get('/:id',getHotel)
export default route