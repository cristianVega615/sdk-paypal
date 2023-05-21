import Express from 'express'
import Dotenv from 'dotenv'
import Cors from 'cors'
import {router as routerEmail} from './routes/email'

Dotenv.config()
const app = Express()
app.use(Cors())

app.use(Express.urlencoded({extended: false}))
app.use(Express.json())

/**
 * ! Acá colocamos los endpoint
 */
app.use('/email', routerEmail)

app.listen((process.env.PORT || 3000), () => {
})