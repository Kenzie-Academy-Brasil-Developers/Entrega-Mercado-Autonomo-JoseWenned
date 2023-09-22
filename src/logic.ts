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
