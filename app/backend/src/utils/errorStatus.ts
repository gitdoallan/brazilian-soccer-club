export const errorStatus = (errorName: string) => {
  const internalServerError = { status: 500, message: 'Internal Server Error' };
  const error = {
    validationError: { status: 400, message: 'Validation Error' },
    notFoundError: { status: 404, message: 'Not Found' },
    conflictError: { status: 409, message: 'Conflict' },
    unauthorizedError: { status: 401, message: 'Unauthorized' },
  } as { [key: string]: { status: number, message: string } };
  return error[errorName] || internalServerError;
};

export default errorStatus;
