import {Router} from "express"
import { getAllUsers } from "../controllers/userControllers"
import { verifyJWT } from "../middleware/verifyJWT"

const router = Router()

router.route("/")
    .get(verifyJWT, getAllUsers)


export default router