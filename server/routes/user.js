import express from "express";
import { login, newUser, getMyProfile, logout } from "../controllers/user.js";
import { singleAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";
const app = express.Router();

app.post("/login", login);
app.post("/new", singleAvatar, newUser);

//after here user must be logged in to access route
app.use(isAuthenticated);
app.get("/me", getMyProfile);
app.get("/logout", logout);
export default app;
