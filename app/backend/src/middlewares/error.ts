import { ErrorRequestHandler } from 'express';
import error from '../utils/errorStatus';

const errorHandlerMiddleware: ErrorRequestHandler = (name, _req, res, _next) => {
  const errorHandlerMsg = error(name);
  return res.status(errorHandlerMsg.status).json(errorHandlerMsg.message);
};

export default errorHandlerMiddleware;
