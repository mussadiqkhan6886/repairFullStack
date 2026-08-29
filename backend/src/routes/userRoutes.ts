import {Router} from "express"
import { getAllUsers } from "../controllers/userControllers"
import { verifyJWT } from "../middleware/verifyJWT"

const router = Router()

router.use(verifyJWT)

router.route("/")
    .get(getAllUsers)


export default router