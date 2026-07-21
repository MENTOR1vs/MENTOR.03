/**
 * Defines authentication API endpoints.
 *
 * Endpoints:
 * - POST /api/auth/register
 * - POST /api/auth/login
 * - POST /api/auth/logout
 * - GET  /api/auth/me
 */
import { Router } from "express";
import {
  getCurrentUser,
  login,
  logout,
  register
} from "../controllers/authController.js";
import { authenticate } from "../middleware/authMiddleware.js";

// Defines the authentication routes exposed by the API.
export const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
// Session recovery requires a valid authentication cookie.
authRouter.get("/me", authenticate, getCurrentUser);
