import { Router } from 'express'
import { getAllPlaylists } from '../controllers/playlist.js'

const router = Router()

router.get('/', getAllPlaylists)

export default router
