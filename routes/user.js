
import { Router } from "express";
import { userLogIn, userLogOut, userRegister } from "../controllers/user.js";

const userRouter = Router();


userRouter.post('/users/register', userRegister);

userRouter.post('/users/login', userLogIn);

userRouter.post('/users/logout', userLogOut);


export default userRouter;


