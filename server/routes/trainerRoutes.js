import express from "express";
import isAuthenticated , {authorizeRole} from "../middleware/auth.js"
import { getUserDetails, loginUser, logoutUser } from "../controllers/userController.js"

const router = express.Router()

router.route("/login").post(loginUser)
router.route("/logout").post(isAuthenticated,logoutUser)
router.route("/get/me").get(isAuthenticated,authorizeRole("trainer"),getUserDetails)

export default router