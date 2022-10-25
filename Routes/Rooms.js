import express  from "express";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../Controllers/RoomController.js";

const route = express.Router();

route.post('/:hotelid',createRoom)
route.put('/:id',updateRoom)
route.delete('/:id/:hotelid',deleteRoom)
route.get('/',getAllRooms);
route.get('/:id',getRoom)

export default route