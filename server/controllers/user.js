import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import { sendToken, cookieOptions } from "../utils/features.js";
import { ErrorHandler } from "../utils/utility.js";
import { TryCatch } from "../middlewares/error.js";
//create a new user and save to database and save in cookie
const newUser = async (req, res) => {
  try {
    const { name, username, password, bio } = req.body;
    console.log("Request body:", req.body);

    const avatar = {
      public_id: "khf",
      url: "khfkhea",
    };
    const user = await User.create({
      name,
      username,
      password,
      bio,
      avatar,
    });

    sendToken(res, user, 201, "User Created");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Ivalid username Or Password", 404));
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(new ErrorHandler("Ivalid username Or Password", 404));
  } else {
    sendToken(res, user, 200, `Welcome Back,${user.name}`);
  }
};
const getMyProfile = TryCatch(async (req, res) => {
  await User.findById(req.user);

  res.status(200).json({
    success: true,
    data: req.user,
  });
});
const logout = TryCatch(async (req, res) => {
  res
    .status(200)
    .cookie("chatzone-token", "", { ...cookieOptions, maxAge: 0 })
    .json({
      success: true,
      message: "logout successfully",
    });
});
export { login, newUser, getMyProfile, logout };
