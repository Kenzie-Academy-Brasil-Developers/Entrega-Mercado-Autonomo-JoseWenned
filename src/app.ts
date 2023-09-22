import { createProduct } from "./logic"
import express from "express"

const app = express()

app.use(express.json())

app.get("/products")
app.post("/products", createProduct)

const Port = 3000

app.listen(Port, () => {
    console.log(`Server started on port ${Port}`)
})