import "express";
import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: {
        username: string;
        role: string;
      } | JwtPayload;
    }
  }
}

export {};