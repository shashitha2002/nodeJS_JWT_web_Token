import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, role });

    await newUser.save();

    return res
      .status(201)
      .json({ message: `User registered successfully! ${username}` });
  } catch (error) {
    return res.status(500).json({ message: `server error! ${error}` });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    //get the suer by using the username(username is unique) 
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    //check the password using bcrypt.compare() method
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    //generate the token using jwt.sign
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ token });
    
  } catch (error) {
    return res.status(500).json({ message: `server error! ${error}` });
  }
};
