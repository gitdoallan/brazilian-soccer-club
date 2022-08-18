import { Request, Response } from 'express';
import { ILoginService } from '../interfaces/login.interface';

export default class LoginController {
  constructor(private service: ILoginService) {
    this.service = service;
  }

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const token = await this.service.login(email, password);
    return res.status(200).json({ token });
  };
}
