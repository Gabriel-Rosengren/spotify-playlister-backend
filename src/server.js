import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import authRouter from './routers/auth.js'
import callbackRouter from './routers/callback.js'
import userRouter from './routers/user.js'
import playlistRouter from './routers/playlist.js'

const app = express()

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,
  optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.disable('x-powered-by')

app.use('/login', authRouter)
app.use('/callback', callbackRouter)
app.use('/user', userRouter)
app.use('/playlist', playlistRouter)

app.get('*', (req, res) => {
  res.status(404).json({
    error: 'Resource not found'
  })
})

export default app
