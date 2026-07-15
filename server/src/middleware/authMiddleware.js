import jwt from "jsonwebtoken";

export function authenticate(request, response, next) {
  const cookieName = process.env.COOKIE_NAME || "mentor_session";
  const token = request.cookies[cookieName];

  if (!token) {
    return response.status(401).json({
      success: false,
      message: "You must log in first."
    });
  }

  try {
    request.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return response.status(401).json({
      success: false,
      message: "Your session is invalid or has expired."
    });
  }
}

export function requireRole(...allowedRoles) {
  return function roleMiddleware(request, response, next) {
    if (!allowedRoles.includes(request.user.role)) {
      return response.status(403).json({
        success: false,
        message: "You do not have permission to perform this action."
      });
    }

    next();
  };
}
