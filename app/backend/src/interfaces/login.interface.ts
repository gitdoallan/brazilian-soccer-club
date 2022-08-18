import { IUser } from './user.interface';

export default interface ILoginService {
  login(email: string, password: string): Promise<string>;
}

export interface ILoginModel {
  login(email: string): Promise<IUser>;
}
