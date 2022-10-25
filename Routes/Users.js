import express  from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../Controllers/UserController.js";

const route = express.Router();
route.put('/:id',updateUser)
route.delete('/:id',deleteUser)
route.get('/',getAllUsers)
route.get('/:id',getUser)

export default route