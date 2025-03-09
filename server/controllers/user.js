import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";
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
const login = (req, res) => {
  res.send("Hello World");
};
export { login, newUser };
