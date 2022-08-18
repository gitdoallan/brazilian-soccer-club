import { Request, Response } from 'express';
import loginService from '../services/login.service';

const LoginController = {
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const token = await loginService.login(email, password);
    res.status(200).json({ token });
  },
};

export default LoginController;
