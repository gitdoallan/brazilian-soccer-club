import * as bcrypt from 'bcryptjs';
import { ErrorHandler } from './ErrorHandler';
import { MSG_INVALID_FIELDS } from './returnedMessages';
import { STATUS_UNAUTHORIZED } from './httpStatus';

export const validatePassword = (password: string, hash: string) => {
  const validatePass = bcrypt.compareSync(password, hash);

  if (!validatePass) throw new ErrorHandler(STATUS_UNAUTHORIZED, MSG_INVALID_FIELDS);

  return validatePass;
};

export default validatePassword;
