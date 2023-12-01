import { Router } from "express"
import { firstController } from "./app/api/controllers/FirstController"

const router: Router = Router()

//Routes
router.get("/api/test", firstController.home)

export { router }
