import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";
const router = express.Router();

router.post("/create", createUser);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser);
router.get("/get/:id", getUser);

export default router;
