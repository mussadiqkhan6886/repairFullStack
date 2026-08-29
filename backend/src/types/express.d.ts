import "express";
import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string
        username: string;
        role: string;
      } | JwtPayload;
    }
  }
}

export {};