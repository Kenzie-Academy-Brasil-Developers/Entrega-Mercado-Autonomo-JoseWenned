import { Request, Response } from "express";
import { Market } from "./database";

export const getProduct = (req: Request, res: Response) => {
    return res.status(200).json(Market)
}