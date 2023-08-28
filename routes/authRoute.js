import express from "express";
import { loginController, registerController, testController } from "../controllers/authController.js";

// router object
const router = express.Router();

// routing
// register || method post
router.post('/register',registerController)

// login || post
router.post('/login',loginController)

// test route
router.get('/test', testController)

export default router;