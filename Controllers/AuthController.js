import UserModel from "../Model/UserModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//register

export const register = async(req,res) =>{
    const password = req.body.password;
    const hash = await bcrypt.hash(password,10)
    const newUser = new UserModel({
        username:req.body.username,
        email:req.body.email,
        password:hash
    })
    try {
        const user = await newUser.save()
        const token = jwt.sign({
            username:user.username,
            id:user._id
        },process.env.JWT_KEY,{expiresIn:'1h'})
        res.status(200).json({user,token})
    } catch (error) {
        res.status(500).json(error)
    }
}

//login 
export const login = async(req,res)=>{
    const {username,password} = req.body;
    try {
        const user = await UserModel.findOne({username:username});
        if(!user){
            res.status(500).json('user dont exist');

        }else{
            const validaty = await bcrypt.compare(password,user.password);
            if(!validaty){
                res.status(500).json('wrong password')
            }else {
                
                const token = jwt.sign({
                    username:user.username,
                    id:user._id,
                    isAdmin:user.isAdmin
                },process.env.JWT_KEY,{expiresIn:'1h'})
                const {password,isAdmin, ...other} = user._doc
                res.cookie("access_token",token).status(200).json({...other,token})
            }
        }
    } catch (error) {
        res.status(500).json(error)
    }
}