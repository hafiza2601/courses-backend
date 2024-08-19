// import path from "path"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import routeModules from './routes/index.js'
import ErrorHandler from "./shared/middlewares/errorHandler.js"

// init app
const app = express()

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true
}))
//Parse Json encoded bodies
app.use(express.json({ limit: "16kb" }))
//Parse form-urlencoded encoded bodies
app.use(express.urlencoded({ extented: false, limit: "16kb" }))
app.use(cookieParser())

// routes
routeModules.forEach(addRoutes => addRoutes(app));

// Error handler
app.use(ErrorHandler);

export { app }
