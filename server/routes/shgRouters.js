import  express from "express";
import isAuthenticated , {authorizeRole} from "../middleware/auth.js"
import createSHG from "../controllers/shgController.js";
import {addMember, multipleUpdate} from "../controllers/shgController.js";

const router = express.Router();

router.post("/createSHG",createSHG);
router.post("/addMember", addMember);
router.post("/bulkUpdate", multipleUpdate);

export default router;