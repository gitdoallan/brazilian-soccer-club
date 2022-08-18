import * as dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { ErrorHandler } from '../utils/ErrorHandler';
import { MSG_MISSING_TOKEN, MSG_INVALID_TOKEN } from '../utils/returnedMessages';
import { STATUS_NOT_FOUND, STATUS_SUCCESS } from '../utils/httpStatus';

dotenv.config();

const secret = process.env.JWT_SECRET || 'jwt_secret';

export const validateTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return next(new ErrorHandler(STATUS_NOT_FOUND, MSG_MISSING_TOKEN));

  const data = jwt.verify(authorization, secret) as { data: jwt.JwtPayload };

  const { role } = JSON.parse(JSON.stringify(data));

  if (!role) return next(new ErrorHandler(STATUS_NOT_FOUND, MSG_INVALID_TOKEN));

  return res.status(STATUS_SUCCESS).json({ role });
};

export default validateTokenMiddleware;
