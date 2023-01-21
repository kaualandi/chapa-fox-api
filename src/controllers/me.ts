import { Request, Response } from 'express';
import Token from "../models/token";
import User from "../models/user";

export class MeController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
      password
    });
    if (!user) {
      res.status(401).json({ detail: 'E-mail ou senha inválidos.' });
      return;
    }
    const token = new Token({ user: user._id });
    await token.save();
    res.json(token);
  }

  async getMe(req: Request, res: Response) {
    const { token } = req.params;
    const tokenModel = await Token.findById(token);
    if (!tokenModel) {
      res.status(401).json({ detail: 'Token inválido.' });
      return;
    }
    const user = await User.findById(tokenModel.user);
    if (!user) {
      res.status(401).json({ detail: 'Token inválido.' });
      return;
    }
    res.json(user);
  }
}