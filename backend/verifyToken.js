import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You Are Not Authenticated!"));
  }

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return next(createError(403, "Token Is Not Valid!"));
    }

    // Extract and assign user properties including patientId and doctorId
    req.user = {
      id: decoded.id,
      patientId: decoded.patientId,
      doctorId: decoded.doctorId,
    };

    next();
  });
};
