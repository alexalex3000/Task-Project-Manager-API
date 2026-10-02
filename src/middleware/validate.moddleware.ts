import {ZodSchema} from "zod/v3";
import { Request, Response, NextFunction } from 'express';

export const validateBody = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if(!result.success){
            return res
                .status(400)
                .json({
                    success: false,
                    errors: result.error.errors.map((err) => ({
                        message: err.message,
                    }))
                });
        }

        req.body = result.data
        next()
    }
}