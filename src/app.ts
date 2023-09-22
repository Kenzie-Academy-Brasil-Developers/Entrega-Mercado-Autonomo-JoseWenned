import { createProduct, getProduct, getOneProduct, deleteProduct, updateProduct } from "./logic"
import express from "express"

const app = express()

app.use(express.json())

app.get("/products", getProduct)
app.get("/products/:Id", getOneProduct)
app.post("/products", createProduct)
app.delete("/products/:Id", deleteProduct)
app.patch("/products/:Id", updateProduct)

const Port = 3000

app.listen(Port, () => {
    console.log(`Server started on port ${Port}`)
})