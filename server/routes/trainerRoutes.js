import express from "express";
import isAuthenticated , {authorizeRole} from "../middleware/auth.js"
import { getUserDetails, loginUser, logoutUser } from "../controllers/userController.js"
import registerTrainerProfile, { getTrainerProfile } from "../controllers/trainerProfileController.js";

const router = express.Router()

router.route("/login").post(loginUser)
router.route("/logout").post(isAuthenticated,logoutUser)
router.route("/all").get(getUserDetails)
router.route("/profile").post(registerTrainerProfile)
router.route("/profile").get(isAuthenticated,authorizeRole("trainer"),getTrainerProfile)

export default router