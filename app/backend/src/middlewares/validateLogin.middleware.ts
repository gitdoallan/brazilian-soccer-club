import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { EMAIL_REGEX } from '../utils/regex';
import { STATUS_BAD_REQUEST, STATUS_UNAUTHORIZED } from '../utils/httpStatus';
import { MSG_FIELDS_MISSING, MSG_INVALID_FIELDS } from '../utils/returnedMessages';
import { MIN_PASSWORD_LENGTH } from '../utils/magicNumbers';

export const validateLoginMiddleware = (req: Request, _res: Response, next: NextFunction): void => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler(STATUS_BAD_REQUEST, MSG_FIELDS_MISSING));
  }

  if (!EMAIL_REGEX.test(email) || password.length < MIN_PASSWORD_LENGTH) {
    return next(new ErrorHandler(STATUS_UNAUTHORIZED, MSG_INVALID_FIELDS));
  }

  next();
};

export default validateLoginMiddleware;
