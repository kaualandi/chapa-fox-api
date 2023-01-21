import { Request, Response } from 'express';
import User from '../models/user';

export class UserController {
  async findAll(req: Request, res: Response) {
    const users = await User.find();
    res.json(users);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ detail: 'Usuário não encontrado.' });
      return;
    }
    res.json(user);
  }

  async create(req: Request, res: Response) {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      res.status(404).json({ detail: 'Usuário não encontrado.' });
      return;
    }
    res.json(user);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).json({ detail: 'Usuário não encontrado.' });
      return;
    }
    res.json({ detail: 'Usuário removido com sucesso.' });
  }
}