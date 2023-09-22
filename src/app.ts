import { createProduct, getProduct } from "./logic"
import express from "express"

const app = express()

app.use(express.json())

app.get("/products", getProduct)
app.post("/products", createProduct)

const Port = 3000

app.listen(Port, () => {
    console.log(`Server started on port ${Port}`)
})