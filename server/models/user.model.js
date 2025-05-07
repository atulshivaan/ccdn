import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  password:{
type:String
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid email"]
  },
  age: {
    type: Number,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
});

const User = mongoose.model("User", UserSchema);
export default User;
