import express from "express";
import { Admin } from "../models/Admin.js";
import { Student } from "../models/Student.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existinguser = await Admin.findOne({ email });
    if (existinguser) {
      return res.json({ success: false, message: "Email Already Exist" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const newadmin = new Admin({
      username,
      password: hashedpassword,
      email,
    });
    await newadmin.save();
    res.json({ success: true, message: "User registered successfully." });
  } catch (err) {
    console.log(err);
  }
});
// Login route
router.post("/login", async (req, res) => {
  try {
      const { username, password, userType } = req.body;
      let User;

      if (userType === 'admin') {
          User = Admin;
      } else {
          User = Student;
      }

      const user = await User.findOne({ username });
      if (!user) {
          return res.json({ success: false, message: "Invalid username or password" });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
          return res.json({ success: false, message: "Invalid username or password" });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
  } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "An error occurred" });
  }
});

export { router as AdminRouter };