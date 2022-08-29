import express from "express";
import cors from 'cors'
import { testCon } from "./testConnect.js";
import { routes } from "./routes.js";

const port = process.env.PORT = 3001
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}),
)

app.use(routes)


testCon().then((res) => {
    if(res == true){
        app.listen(port, ()=>{
            console.log('server on ' + port)
        })
    }
})

