import { createProduct, getProduct, getOneProduct, deleteProduct, updateProduct } from "./logic"
import express from "express"
import { isValidProduct, isValidProductId } from "./middlewares/middlewares"
const app = express()

app.use(express.json())

app.get("/products", getProduct)
app.post("/products", isValidProduct, createProduct)
app.get("/products/:Id", isValidProductId, getOneProduct)
app.delete("/products/:Id", isValidProductId, deleteProduct)
app.patch("/products/:Id", isValidProductId, isValidProduct, updateProduct)

const Port = 3000

app.listen(Port, () => {
    console.log(`Server started on port ${Port}`)
})