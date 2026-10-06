import express from  'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { getConnection } from './config/Connection.js'
import router from './routes/ProductoRoute.js'
import userRoutes from './routes/usernameRoute.js';
import type_personRoutes from './routes/type_personRoute.js';
import order_router from './routes/ordenRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)
app.use('/', userRoutes);
app.use('/', type_personRoutes);
app.use('/',order_router)

app.listen(process.env.PORT, ()=>{
    console.log(`conectados al puerto: ${process.env.PORT}`)
    getConnection
      
})