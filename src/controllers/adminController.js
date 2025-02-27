import User from "../models/userModel.js";

export const getAllAdmins = async (req, res) => {
    try {
        const admins = await User.find({ role: "admin" });
        return res.status(200).json(admins);
    } catch (error) {
        return res.status(500).json({ message: `server error! ${error}` });
    }
};