import router from "./Routes/users.routes.js"
import express from "express"

const PORT = 8080
const app = express()

app.use(express.urlencoded({extended:true})) 
app.use(express.json())

app.use("/", router)

app.listen(PORT, () => {console.log("Server running")})
app.on("Error", (err) => {console.log("Ha ocurrido un error en el servidor: ", err)})