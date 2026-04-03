import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

//Register Route
router.post("/register",registerUser);
router.post("/login",loginUser);

router.get("/profile",authMiddleware,(req,res) => {
    res.json(req.user);
});

//admin mattum 
router.get("/admin",authMiddleware,roleMiddleware("admin"),(req,res)=>{
    res.json({message:"welcome admin"});
}
);

export default router;