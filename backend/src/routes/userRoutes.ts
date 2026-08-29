import {Router} from "express"
import { getAllUsers } from "../controllers/userControllers"
import { verifyJWT } from "../middleware/verifyJWT"
import { verifyRole } from "../middleware/verifyRole"
import { ROLES } from "../lib/constants"

const router = Router()

router.use(verifyJWT)

router.route("/")
    .get(verifyRole(ROLES.MANAGER, ROLES.ADMIN) ,getAllUsers)


export default router