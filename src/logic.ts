import { Request, Response } from "express";
import {  v4  as  uuidv4  }  from "uuid"; 
import { Market } from "./database";
import { Product } from "./interfaces";

export const createProduct = (req: Request, res: Response) => {

    const { name, price, weight, section, calories } = req.body

    const current = new Date()
    const expirationData = new Date(current)
    expirationData.setDate(current.getDate() + 365)

    const newProduct = {

        id: uuidv4(),
        name,
        price,
        weight,
        section,
        calories,
        expirationData

    }

    Market.push(newProduct)

    return res.status(201).json({ message: "Product sucessfully created", product: newProduct})
}

export const getProduct = (req: Request, res: Response) => {
    const total = Market.reduce((acc, current) => acc + Number(current.price), 0)

    return res.status(200).json({total: total, products: Market})
}

export const getOneProduct = (req: Request, res: Response) => {
    const products = Market.find(product => product.id === req.params.Id)

    return res.status(200).json({products})
}

export const deleteProduct = (req: Request, res: Response) => {

    const index = Market.findIndex(product => product.id === req.params.Id)
    Market.splice(index, 1)

    return res.status(204).json()
}

export const updateProduct = (req: Request, res: Response) => {
    const product = Market.find(product => product.id === req.params.Id)

    let productBody : Partial<Product> = {}

    Object.entries(req.body).forEach((entries) => {
        const [key, value] = entries
        if(key === "name"|| key === "section"){
            productBody[key] = value as string
        } else if(key === "price" || key === "weight" || key === "calories"){
            productBody[key] = value as number
        }
    })

    const newProduct = { ...product, ...productBody }

    const index = Market.findIndex(product => product.id === req.params.Id)

    Market.splice(index, 1, newProduct as Product)

    return res.status(200).json({product: newProduct })
}