import { ErrorRequestHandler } from 'express';
import { STATUS_INTERNAL_SERVER_ERROR, STATUS_UNAUTHORIZED } from '../utils/httpStatus';
import { MSG_INVALID_TOKEN } from '../utils/returnedMessages';

export const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  if (err.message === 'jwt malformed') {
    return res.status(STATUS_UNAUTHORIZED).json({ message: MSG_INVALID_TOKEN });
  }
  return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: err.message });
};

export default errorMiddleware;
