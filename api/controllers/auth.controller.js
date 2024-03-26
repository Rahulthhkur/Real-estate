import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup =async (req, res)=>{

const {username, email, password}= req.body;
const hasedPassword = bcryptjs.hashSync(password, 10);
const newUser = new User ({username, email, password:hasedPassword});
try {
    await newUser.save()
 res.status(201).json("User created succesfully");
} catch (error) {
    res.status(500).json(error.message);
}
 
};