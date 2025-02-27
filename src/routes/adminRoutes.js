import express from 'express';
const router = express.Router();
import verifyToken from '../middlewares/authMiddleware.js';
import authorizeRole from '../middlewares/roleMiddleware.js';
import { getAllAdmins } from '../controllers/adminController.js';

// take all the admins 
router.get("/all",verifyToken, authorizeRole("admin"), getAllAdmins);

export default router;