import User from "../models/user.model.js";

export const getUserForSideBar = async(req,res)=>{
    try{
        const loggedInUserId = req.user._id;

        const filterUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filterUsers);
    }
    catch(error){
        console.error("error in gerUserForSideBar",error.message);
        res.status(500).json({error:"internal server error"});


    }
};

export default getUserForSideBar;
