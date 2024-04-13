import { createProduct, getProduct, getOneProduct, deleteProduct, updateProduct } from "./logic"
import express from "express"
import { isValidProduct, isValidProductId } from "./middlewares/middlewares"
import swaggerUiExpress from "swagger-ui-express"
import swaggerDocument from "./swagger.json"

const app = express()

app.use(express.json())

app.get("/products", getProduct)
app.post("/products", isValidProduct, createProduct)
app.get("/products/:id", isValidProductId, getOneProduct)
app.delete("/products/:id", isValidProductId, deleteProduct)
app.patch("/products/:id", isValidProductId, isValidProduct, updateProduct)

app.use("/api-documentation", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument))

const Port = 3000

app.listen(Port, () => {
    console.log(`Server started on port ${Port}`)
})