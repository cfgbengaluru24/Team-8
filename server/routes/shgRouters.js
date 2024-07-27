import  express from "express";
import isAuthenticated , {authorizeRole} from "../middleware/auth.js"
import createSHG, { getallshg } from "../controllers/shgController.js";
import {addMember, multipleUpdate} from "../controllers/shgController.js";

const router = express.Router();

router.post("/createSHG",createSHG);
router.get("/getallSHG", getallshg)
router.post("/addMember", addMember);
router.post("/bulkUpdate", multipleUpdate);

export default router;