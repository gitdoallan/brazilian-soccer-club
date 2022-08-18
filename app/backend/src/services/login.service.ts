import { ILoginModel, ILoginService } from '../interfaces/login.interface';

import { validatePassword } from '../utils/validatePassword';

import { generateToken } from '../utils/jwtToken';

import { ErrorHandler } from '../utils/ErrorHandler';

require('express-async-errors');

export default class LoginService implements ILoginService {
  constructor(private model: ILoginModel) {
    this.model = model;
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.model.login(email);

    if (!user) throw new ErrorHandler(400, 'Incorrect email or password');

    validatePassword(password, user.password);

    return generateToken(user);
  }
}
