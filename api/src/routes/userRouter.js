import {Router} from "express";
import { userController } from "../controllers/userController.js";
import { validateAccessToken } from "../middlewares/validateAccessToken.js";

const router = Router()
router.post("/update/:id", validateAccessToken, userController.updateUser)
router.delete("/delete/:id", validateAccessToken, userController.deleteUser)
router.get("/:id", validateAccessToken, userController.getUser)
export {router as userRouter};