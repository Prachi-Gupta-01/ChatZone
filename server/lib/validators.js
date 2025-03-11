import { body, check, param, validationResult } from "express-validator";
import { ErrorHandler } from "../utils/utility.js";
const validateHandler = (req, res, next) => {
  const errors = validationResult(req);
  const errorMessages = errors
    .array()
    .map((error) => error.msg)
    .join(",");
  console.log(errorMessages);
  if (errors.isEmpty()) return next();
  else next(new ErrorHandler(errorMessages, 400));
};

const registerValidator = () => [
  body("name", "please enter name").notEmpty(),
  body("username", "please enter username").notEmpty(),
  body("bio", "please enter bio").notEmpty(),
  body("password", "please enter password").notEmpty(),
  check("avatar", "please upload avatar").notEmpty(),
];

const loginValidator = () => [
  body("username", "please enter username").notEmpty(),

  body("password", "please enter password").notEmpty(),
];
const newGroupValidator = () => [
  body("name", "please enter name").notEmpty(),

  body("members")
    .notEmpty()
    .withMessage("please enter members")
    .isArray({ min: 2, max: 100 })
    .withMessage("members must be 2-100"),
];
const addMemberValidator = () => [
  body("chatId", "please enter chat Id").notEmpty(),

  body("members")
    .notEmpty()
    .withMessage("please enter members")
    .isArray({ min: 1, max: 97 })
    .withMessage("members must be 1-97"),
];

const removeMemberValidator = () => [
  param("id", "please enter chat Id").notEmpty(),
];
const sendAttachmentsValidator = () => [
  body("chatId", "Please Enter Chat ID").notEmpty(),
];

const chatIdValidator = () => [param("id", "please enter chat Id").notEmpty()];

const renameIdValidator = () => [
  param("id", "please enter chat Id").notEmpty(),
  body("name", "please enter new name").notEmpty(),
];
const sendRequestValidator = () => [
  body("userId", "please enter user Id").notEmpty(),
];
const acceptRequestValidator = () => [
  body("requestId", "please enter Request Id").notEmpty(),
  body("accept")
    .notEmpty()
    .withMessage(" please add accept ")
    .isBoolean()
    .withMessage("accept must be a boolean"),
];
const adminLoginValidator = () => [
  body("secretKey", "Please Enter Secret Key").notEmpty(),
];
export {
  addMemberValidator,
  chatIdValidator,
  loginValidator,
  newGroupValidator,
  registerValidator,
  removeMemberValidator,
  sendAttachmentsValidator,
  validateHandler,
  renameIdValidator,
  sendRequestValidator,
  acceptRequestValidator,
  adminLoginValidator,
};
