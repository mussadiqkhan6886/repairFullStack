import {Router} from "express"
import { getAllUsers } from "../controllers/userControllers"

const router = Router()

router.route("/")
    .get(getAllUsers)


export default router