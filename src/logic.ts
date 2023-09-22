import { Request, Response } from "express";
import {  v4  as  uuidv4  }  from "uuid"; 
import { Market } from "./database";

export const createProduct = (req: Request, res: Response) => {
    const newProduct = {
        id: uuidv4(),
        name: req.body.name,
        price: req.body.price,
        weight: req.body.weight,
        section: req.body.section,
        calories: req.body.calories,
        expirationData: req.body.expirationData,
    }

    Market.push(newProduct)

    return res.status(201).json({ message: "product sucessfully created", product: newProduct})
}

export const getProduct = (req: Request, res: Response) => {
    return res.status(200).json(Market)
}

export const getOneProduct = (req: Request, res: Response) => {
    const products = Market.find(product => product.id === req.params.Id)

    return res.status(200).json(products)
}

export const deleteProduct = (req: Request, res: Response) => {

    const index = Market.findIndex(product => product.id === req.params.Id)
    Market.splice(index, 1)

    return res.status(200).json({ message: "Product sucessfully delete." })
}