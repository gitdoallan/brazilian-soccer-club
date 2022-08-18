import * as bcrypt from 'bcryptjs';
import { ErrorHandler } from './ErrorHandler';

export const validatePassword = (password: string, hash: string) => {
  const validatePass = bcrypt.compareSync(password, hash);

  if (!validatePass) throw new ErrorHandler(400, 'Incorrect email or password');

  return validatePass;
};

export default validatePassword;
