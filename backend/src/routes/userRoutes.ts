import {Router} from "express"
import { createNewUser, deleteUser, getAllUsers, getSingleUser, updateUser, getCurrentUser, getUsersIds } from "../controllers/userControllers"
import { verifyJWT } from "../middleware/verifyJWT"
import { verifyRole } from "../middleware/verifyRole"
import { ROLES } from "../lib/constants"
import { apiLimiter } from "../middleware/apiLimiter"

const router = Router()

router.use(verifyJWT)
router.use(apiLimiter)

router.get("/me", verifyRole(ROLES.EMPLOYEE, ROLES.MANAGER, ROLES.ADMIN) , getCurrentUser)
router.get("/", verifyRole(ROLES.MANAGER, ROLES.ADMIN) , getAllUsers)
router.get("/ids", verifyRole(ROLES.MANAGER, ROLES.ADMIN) , getUsersIds)
router.get("/:id", verifyRole(ROLES.MANAGER, ROLES.ADMIN) , getSingleUser)
router.post("/", verifyRole(ROLES.MANAGER, ROLES.ADMIN), createNewUser)
router.patch("/:id", verifyRole(ROLES.MANAGER, ROLES.ADMIN), updateUser)
router.delete("/:id", verifyRole(ROLES.ADMIN), deleteUser)


export default router