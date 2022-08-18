import { ILoginModel, ILoginService } from '../interfaces/login.interface';

// import generateToken from '../utils/generateToken';

require('express-async-errors');

export default class LoginService implements ILoginService {
  constructor(private model: ILoginModel) {
    this.model = model;
  }

  async login(email: string, _password: string): Promise<string> {
    const user = await this.model.login(email);

    if (!user) throw new Error('notFoundError');

    return 'token';
  }
}
