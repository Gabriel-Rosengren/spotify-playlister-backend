import express from 'express'
import 'dotenv/config'
import cors from 'cors'

const app = express()
app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


export default app