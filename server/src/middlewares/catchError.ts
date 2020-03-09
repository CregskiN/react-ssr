import { Request, Response, NextFunction } from 'express';


export const catchError = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            next();
        } catch (err) {
            res.json({
                msg: 'error'
            })
        }
    }
}