import express from "express";
import isAuthenticated , {authorizeRole} from "../middleware/auth.js"
import registerUser, { loginUser, logoutUser } from "../controllers/userController.js";

const router = express.Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(isAuthenticated,logoutUser)


export default router