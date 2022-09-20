import express from "express";
import { gitData, sendHtml } from "../controller/controller.js";

const router = express.Router();

router.get("/", sendHtml);
router.get("/phones", gitData);

export default router;
