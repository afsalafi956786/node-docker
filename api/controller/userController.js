import User from "../models/User.js";
import bcrypt from "bcrypt";
export const getAllUser = async (req, res, next) => {
  try {
    let users;
    users = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    return console.log(error.message);
  }
};
export const UserSignup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    let existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = new User({
      name,
      email,
      password: hashPassword,
      blogs: [], 
    });
    await user.save();
    console.log(user,'sjdjd')
    return res.status(201).json({ user });
  } catch (err) {
    console.log(err.message);
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(404).json({ message: "cant find the user" });
    }
    const isCompare = bcrypt.compareSync(password, existUser.password);
    console.log(isCompare, "__");
    if (!isCompare) {
      res.status(400).json({ message: "incorrect password" });
    }
    res.status(200).json({ message: "Login succssfull" });
  } catch (error) {
    console.log(error.message);
  }
};
