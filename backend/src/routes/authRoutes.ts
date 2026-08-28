import {Router} from "express"
import { login, logout, refresh } from "../controllers/authControllers"
import { loginLimiter } from "../middleware/loginLimiter"

const router = Router()

router.post("/login", loginLimiter, login)
router.post("/refresh", refresh)
router.post("/logout", logout)

export default router