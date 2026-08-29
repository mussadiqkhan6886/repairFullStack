import {Router} from "express"
import { createNewUser, deleteUser, getAllUsers, updateUser } from "../controllers/userControllers"
import { verifyJWT } from "../middleware/verifyJWT"
import { verifyRole } from "../middleware/verifyRole"
import { ROLES } from "../lib/constants"

const router = Router()

router.use(verifyJWT)

router.get("/", verifyRole(ROLES.MANAGER, ROLES.ADMIN) ,getAllUsers)
router.post("/", verifyRole(ROLES.MANAGER, ROLES.ADMIN), createNewUser)
router.patch("/:id", verifyRole(ROLES.MANAGER, ROLES.ADMIN), updateUser)
router.delete("/:id", verifyRole(ROLES.ADMIN), deleteUser)


export default router