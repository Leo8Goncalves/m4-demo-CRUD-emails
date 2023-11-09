import 'reflect-metadata'
import 'express-async-errors'
import swaggerUiExpress from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import express, { Application, json } from 'express'
import { userRouter } from './routes/user.routes'
import { handleError } from './middlewares/handleErrors.middleware'

export const app: Application = express()

app.use(json())

app.use('/api-documentation', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument))
app.use('/users', userRouter)

app.use(handleError)