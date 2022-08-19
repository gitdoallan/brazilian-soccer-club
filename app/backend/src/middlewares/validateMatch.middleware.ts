import { Request, Response, NextFunction } from 'express';
import { STATUS_UNAUTHORIZED } from '../utils/httpStatus';
import { MSG_SAME_TEAM } from '../utils/returnedMessages';
import { ErrorHandler } from '../utils/ErrorHandler';

export const validateMatchMiddleware = (req: Request, _res: Response, next: NextFunction): void => {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) throw new ErrorHandler(STATUS_UNAUTHORIZED, MSG_SAME_TEAM);

  next();
};

export default validateMatchMiddleware;
