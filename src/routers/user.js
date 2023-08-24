import { Router } from 'express'
import { getUserProfile } from '../controllers/playlist.js'

const router = Router()

router.get('/', getUserProfile)

export default router
