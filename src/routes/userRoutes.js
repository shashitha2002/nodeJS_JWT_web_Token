import express from 'express';
const router = express.Router();

//only admin can access this route
router.get("/admin", (req, res) => {
    res.json({ message: "Welcome Admin!" });
});


//both admin and manager can access this route
router.get("/manager", (req, res) => {
    res.json({ message: "Welcome manager!" });
});

//all of the roles can access this route
router.get("/user", (req, res) => {
    res.json({ message: "Welcome user!" });
});

export default router;