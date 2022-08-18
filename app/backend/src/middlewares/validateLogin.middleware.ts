import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { EMAIL_REGEX } from '../utils/regex';

export const validateLoginMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler(400, 'All fields must be filled'));
  }

  if (!EMAIL_REGEX.test(email) || password.length < 6) {
    return next(new ErrorHandler(401, 'Incorrect email or password'));
  }

  next();
};

export default validateLoginMiddleware;
