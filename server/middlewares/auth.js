import { ErrorHandler } from "../utils/utility.js";

import jwt from "jsonwebtoken";
const isAuthenticated = (req, res, next) => {
  const token = req.cookies["chatzone-token"];

  if (!token) {
    return next(new ErrorHandler("PLease login to access this route", 401));
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decodedData._id;

  next();
};
const adminOnly = (req, res, next) => {
  const token = req.cookies["chatzone-admin-token"];

  if (!token)
    return next(new ErrorHandler("Only Admin can access this route", 401));

  const secretKey = jwt.verify(token, process.env.JWT_SECRET);

  const isMatched = secretKey === adminSecretKey;

  if (!isMatched)
    return next(new ErrorHandler("Only Admin can access this route", 401));

  next();
};
export { isAuthenticated, adminOnly };
