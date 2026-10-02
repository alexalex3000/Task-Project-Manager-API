import { Request, Response, NextFunction } from 'express';
import {z} from "zod";

export const validateBody = (schema: z._ZodType) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if(!result.success){
            return res
                .status(400)
                .json({
                    success: false,
                    errors: result.error.issues.map((issue) => ({
                        message: issue.message,
                    }))
                });
        }

        req.body = result.data
        next()
    }
}