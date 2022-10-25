import UserModel from "../Model/UserModel.js";


export const updateUser = async(req,res)=>{
    const id = req.params.id
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(id,{$set:req.body},{new:true});
        
            res.status(200).json(updatedUser)
        
    } catch (error) {
        res.status(500).json(error)
    }
}
export const deleteUser = async(req,res)=>{
    const id = req.params.id
    try {
        const deleteUser = await UserModel.findByIdAndDelete(id);
        res.status(200).json(deleteUser)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getAllUsers = async(req,res)=>{
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getUser = async(req,res)=>{
    const id = req.params.id
    try {
        const user = await UserModel.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
}