import express from 'express'
import 'dotenv/config'
import {connect} from './config/db'
import {restRouter} from "./api"
import passport from "passport";
import { configJWTStrategy } from "./api/middlewares/passport-jwt";
import cors from 'cors'

const app = express()
const {PORT} = process.env


connect()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api', restRouter)


app.get('/', (req, res)=>{
    res.send("ciao")
})


app.use((req, res, next) => {
    const error = new Error("Not found")
    error.message = "route invalide"
    error.status = 404
    next(error)
});

app.use(passport.initialize());
configJWTStrategy();

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.json({
        error:{
            msg: error.message
        }
    })
})


app.listen(PORT, ()=> {
    console.log("app is listen on port 5000")
})