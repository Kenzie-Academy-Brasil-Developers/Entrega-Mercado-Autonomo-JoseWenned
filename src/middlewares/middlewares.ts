import { NextFunction, Request, Response } from "express";
import { Market } from "../database";

export const isValidProduct = (req: Request, res: Response, next: NextFunction) => {
    
    if(Market.some(product => product.name === req.body.name)){
        return res.status(409).json({ error: "Product already registered." })
    }

    next()
}

export const isValidProductId = (req: Request, res: Response, next: NextFunction) => {

    if(!Market.some(product => product.id === Number(req.params.Id))){
        return res.status(404).json({ error: "Product not found."})
    }

    next()
}