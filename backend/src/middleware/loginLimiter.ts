import {rateLimit} from "express-rate-limit"

export const loginLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 5,
    message: {
        success: false,
        message: "Too many login attempts, Try again after 5min"
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true
})