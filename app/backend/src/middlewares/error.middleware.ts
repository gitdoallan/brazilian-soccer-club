import { ErrorRequestHandler } from 'express';
import { STATUS_INTERNAL_SERVER_ERROR } from '../utils/httpStatus';

export const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: err.message });
};

export default errorMiddleware;
