import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';

export const validateLoginMiddleware = (req: Request, _res: Response, next: NextFunction): void => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler(400, 'All fields must be filled'));
  }

  next();
};

export default validateLoginMiddleware;
