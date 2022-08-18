import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';

export const validateLoginMiddleware = (req: Request, _res: Response, next: NextFunction): void => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ErrorHandler(400, 'Email or password is missing');
  }

  next();
};

export default validateLoginMiddleware;
