import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const cookieOptions = {
  maxAge: 15 * 25 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};
const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "ChatZone" })
    .then((data) => console.log(`Connected to DB:${data.connection.host}`))
    .catch((err) => {
      throw err;
    });
};
const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  console.log(token);

  return res.status(code).cookie("chatzone-token", token, cookieOptions).json({
    success: true,

    message,
    user,
  });
};

const emitEvent = (req, event, users, data) => {
  console.log("emitting event", event);
};
const deleteFilesFromCloudinary = async (public_ids) => {
  //delete files from cloudinary
};
export {
  connectDB,
  sendToken,
  cookieOptions,
  emitEvent,
  deleteFilesFromCloudinary,
};
