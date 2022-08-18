import * as bcrypt from 'bcryptjs';
import { ErrorHandler } from './ErrorHandler';
import { MSG_INVALID_FIELDS } from './returnedMessages';
import { STATUS_BAD_REQUEST } from './httpStatus';

export const validatePassword = (password: string, hash: string) => {
  const validatePass = bcrypt.compareSync(password, hash);

  if (!validatePass) throw new ErrorHandler(STATUS_BAD_REQUEST, MSG_INVALID_FIELDS);

  return validatePass;
};

export default validatePassword;
