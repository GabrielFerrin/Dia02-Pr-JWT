import { Router } from "express"
import c from '../controllers/login.controller.js'

const router = Router()

router.post('/login', c.login)
router.get('/verify', c.veryfy)

export default router