import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const addUser = async (req, res) => {
    const { name, email, password, age, salary } = req.body;

    // Check if email already exists
    const emailExist = await User.findOne({ email });
    if (emailExist) {
        return res.status(400).json({
            success: false,
            message: "Email ID already exists",
        });
    }
    if (!name) {
        return res.status(400).json({ message: "Username is required" });
      }
    if(!password)
    {
        return res.status(400).json({
            success:false,
            message:"Password is requires"
        })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
        name,
        email,
        password: hashedPassword, 
        age,
        salary,
    });

    // Save the new user
    await newUser.save();

    return res.status(201).json({
        success: true,
        message: "User registered successfully",
    });
};


export const getAllUser = async (req, res) => {
    console.log("Request received to fetch all users");
  try {
    // Fetch all users from the database
    const users = await User.find(); // Finds all users in the 'users' collection
    
    if (!users || users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }

    // Respond with the users data
    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      success: false,
      message: "Server error, unable to fetch users",
    });
  }
};
export const getUserById = async (req, res) => {
    const userId = req.params.id;
    console.log(`Request received to fetch user with ID: ${userId}`);
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
  
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      return res.status(500).json({
        success: false,
        message: "Server error, unable to fetch user",
      });
    }
  };
  

export const editUser =async(req,res)=>{

}
export const deleteUser = async(req,res)=>{

}