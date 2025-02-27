import express from 'express';
const router = express.Router();
import verifyToken from '../middlewares/authMiddleware.js';
import authorizeRole from '../middlewares/roleMiddleware.js';

//only admin can access this route
router.get("/admin",verifyToken, authorizeRole("admin"), (req, res) => {
    res.json({ message: "Welcome Admin!" });
});


//both admin and manager can access this route
router.get("/manager",verifyToken, authorizeRole("admin", "manager"), (req, res) => {
    res.json({ message: "Welcome manager!" });
});

//all of the roles can access this route
router.get("/user",verifyToken, authorizeRole("admin", "manager","user"), (req, res) => {
    res.json({ message: "Welcome user!" });
});

export default router;