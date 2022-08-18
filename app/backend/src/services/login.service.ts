import ILoginService, { ILoginModel } from '../interfaces/login.interface';

// import generateToken from '../utils/generateToken';

require('express-async-errors');

export default class LoginService implements ILoginService {
  constructor(private model: ILoginModel) {
    this.model = model;
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.model.login(email);

    console.log(user);

    if (!user) {
      throw new Error('notFoundError');
    }

    if (user && user.password !== password) {
      throw new Error('validationError');
    }

    return 'token';
  }
}
