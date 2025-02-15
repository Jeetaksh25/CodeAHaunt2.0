import express from "express";
import { sendmeetingdetails, getmeetingdetails } from "../controllers/connect.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/meetingdetails", sendmeetingdetails);
router.get("/getmeetingdetails/:id", getmeetingdetails);

export default router;