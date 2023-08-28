import { Router } from 'express'
import { getAllPlaylists } from '../controllers/playlist.js'

const router = Router()

router.post('/', getAllPlaylists)

export default router
