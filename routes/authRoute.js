import express from "express";
import { loginController, registerController, testController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// register || method post
router.post('/register',registerController)

// login || post
router.post('/login',loginController)

// test route
router.get('/test',requireSignIn,isAdmin,testController)


// dashboard route
router.get('/user-auth', requireSignIn, (req,res) =>{
    res.status(200).send({ok: true}); 
})

export default router;