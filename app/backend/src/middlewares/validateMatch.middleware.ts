import * as dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { STATUS_UNAUTHORIZED, STATUS_NOT_FOUND } from '../utils/httpStatus';
import { MSG_SAME_TEAM, MSG_MISSING_TOKEN, MSG_INVALID_TOKEN } from '../utils/returnedMessages';
import { ErrorHandler } from '../utils/ErrorHandler';

dotenv.config();

const secret = process.env.JWT_SECRET || 'jwt_secret';

export const validateMatchMiddleware = (req: Request, _res: Response, next: NextFunction): void => {
  const { authorization } = req.headers;
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) throw new ErrorHandler(STATUS_UNAUTHORIZED, MSG_SAME_TEAM);

  if (!authorization) return next(new ErrorHandler(STATUS_NOT_FOUND, MSG_MISSING_TOKEN));

  const data = jwt.verify(authorization, secret) as { data: jwt.JwtPayload };

  const { role } = JSON.parse(JSON.stringify(data));

  if (!role) return next(new ErrorHandler(STATUS_NOT_FOUND, MSG_INVALID_TOKEN));

  next();
};

export default validateMatchMiddleware;
