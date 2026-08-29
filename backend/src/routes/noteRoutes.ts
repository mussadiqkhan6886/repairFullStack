import {Router} from "express"
import { verifyJWT } from "../middleware/verifyJWT"
import { apiLimiter } from "../middleware/apiLimiter"
import { verifyRole } from "../middleware/verifyRole"
import { ROLES } from "../lib/constants"
import { createNewNote, deleteNote, getAllNotes, getSingleNote, updateNote } from "../controllers/noteControllers"

const router = Router()

router.use(verifyJWT)
router.use(apiLimiter)

router.get("/", verifyRole(ROLES.EMPLOYEE, ROLES.ADMIN, ROLES.MANAGER), getAllNotes)
router.get("/:id", verifyRole(ROLES.EMPLOYEE, ROLES.ADMIN, ROLES.MANAGER), getSingleNote)
router.post("/", verifyRole(ROLES.ADMIN, ROLES.MANAGER), createNewNote)
router.patch("/:id", verifyRole(ROLES.EMPLOYEE, ROLES.ADMIN, ROLES.MANAGER), updateNote)
router.delete("/:id", verifyRole(ROLES.ADMIN), deleteNote)

export default router