/**
 * Defines protected administrative endpoints.
 *
 * Endpoint:
 * - GET /api/admin/overview
 *
 * Every administrative endpoint requires:
 * - A valid session.
 * - The ADMIN role.
 */
import { Router } from "express";

import {
  getAdminOverview
} from "../controllers/adminController.js";

import {
  authenticate,
  requireRole
} from "../middleware/authMiddleware.js";

// Administrative routes are protected
// by authentication and the ADMIN role.
export const adminRouter = Router();

adminRouter.get(
  "/overview",
  authenticate,
  requireRole("ADMIN"),
  getAdminOverview
);