import express from 'express'
import morgan from 'morgan'
import loginRoutes from './routes/login.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/login', loginRoutes)

app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default app