import express from 'express'
import 'dotenv/config'
import cors from 'cors'

import authRouter from './routers/auth.js'
import callbackRouter from './routers/callback.js'

const app = express()
app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/login', authRouter)
app.use('/callback', callbackRouter)

app.get('*', (req, res) => {
  res.status(404).json({
    error: 'Resource not found'
  })
})

export default app
