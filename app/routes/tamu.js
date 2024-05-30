// app/routes/tamu.js
import express from "express";
import tamuController from "../controllers/tamuController.js";
import cekTamu from "../middlewares/tamuMiddleware.js";

const router = express.Router();

router.get("/:tamu", cekTamu, (req, res) => {
  tamuController.getIndex(req, res);
});

export default router;
