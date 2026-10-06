import {NextFunction, Request, Response} from "express";

export const errorMiddlware = (err: Error, req:Request, res: Response, next: NextFunction) => {
    res.status(500).send({success: false, errors: err.message ?? "Unknown error"})
}