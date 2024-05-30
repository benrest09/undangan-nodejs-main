// app/routes/index.js
import express from "express";
import indexController from "../controllers/indexController.js";

const router = express.Router();

router.get("/", (req, res) => {
  indexController.getIndex(req, res);
});

export default router;
