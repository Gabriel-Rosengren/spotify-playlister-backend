import { Router } from 'express'
import { callback } from '../controllers/callback.js'

const router = Router()

router.get('/', callback)

export default router
