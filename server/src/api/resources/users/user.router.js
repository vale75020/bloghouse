import express from "express";
import userController from "./user.ctrl";
import passport from "passport";
import {isAdmin} from '../../middlewares/admin'

export const userRouter = express.Router();

const adminPolicy = [passport.authenticate('jwt', {session:false})]

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/me", passport.authenticate("jwt", {session: false}), userController.authenticated)