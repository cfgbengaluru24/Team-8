import express from "express";
import isAuthenticated , {authorizeRole} from "../middleware/auth.js"
import registerTrainer from "../controllers/trainerController.js";

const router = express.Router()

router.route("/trainer/register").post(isAuthenticated,authorizeRole("admin"),registerTrainer)


export default router