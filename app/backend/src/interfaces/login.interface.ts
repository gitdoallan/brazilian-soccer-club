import { IUser } from './user.interface';

export interface ILoginService {
  login(email: string, password: string): Promise<string>;
}

export interface ILoginModel {
  login(email: string): Promise<IUser>;
}
