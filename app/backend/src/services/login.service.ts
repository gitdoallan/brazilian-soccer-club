import User from '../database/models/User';
import ILoginService from '../interfaces/login.interface';

// import generateToken from '../utils/generateToken';

require('express-async-errors');

export const LoginService = {
  login: async (email: string, password: string): Promise<string> => {
    const user = await User.findOne({ where: { email } });

    console.log(user);

    if (!user) {
      throw new Error('notFoundError');
    }

    if (user && user.password !== password) {
      throw new Error('validationError');
    }

    return 'token';
  },
} as ILoginService;

export default LoginService;
