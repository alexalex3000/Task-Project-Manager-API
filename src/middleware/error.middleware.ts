import {NextFunction, Request, Response} from "express";

export const errorMiddlware = (err: Error, req:Request, res: Response, next: NextFunction) => {
    console.log(err.message)

    res.status(500).send({success: false, error: err.message ?? "Unknown error"})
}