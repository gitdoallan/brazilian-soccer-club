import User from '../database/models/User';

import { ILoginModel } from '../interfaces/login.interface';
import { IUser } from '../interfaces/user.interface';

export default class LoginRepository implements ILoginModel {
  constructor(private model = User) {
    this.model = model;
  }

  login = async (email: string): Promise<IUser> => {
    const user = await this.model.findOne({ where: { email } });

    return user as IUser;
  };
}
