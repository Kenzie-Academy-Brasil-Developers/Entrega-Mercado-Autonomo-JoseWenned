
import express, { Request, Response } from "express"

const app = express()

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    return res.send('created sucessfuly!')
})

const Port = 3000

app.listen(Port, () => {
    console.log(`Server started on port ${Port}`)
})