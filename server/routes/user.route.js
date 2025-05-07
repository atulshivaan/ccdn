import express from "express";
import { addUser, deleteUser, editUser, getAllUser, getUserById} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", addUser);
userRouter.get("/get-user", getAllUser);
userRouter.get("/get-user/:id", getUserById);
userRouter.put("/edit-user/:id", editUser); // Assuming you're editing by ID
userRouter.delete("/delete-user/:id", deleteUser); // Use DELETE method properly

export default userRouter;
