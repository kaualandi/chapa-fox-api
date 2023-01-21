import { Request, Response } from 'express';
import Newspaper from '../models/newspaper';

export class NewspaperController {
  async findAll(req: Request, res: Response) {
    const newspapers = await Newspaper.find();
    res.json(newspapers);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const newspaper = await Newspaper.findById(id);
    if (!newspaper) {
      res.status(404).json({ detail: 'Jornal não encontrado.' });
      return;
    }
    res.json(newspaper);
  }

  async create(req: Request, res: Response) {
    const newspaper = new Newspaper(req.body);
    await newspaper.save();
    res.status(201).json(newspaper);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const newspaper = await Newspaper.findByIdAndUpdate(id, req.body, { new: true });
    if (!newspaper) {
      res.status(404).json({ detail: 'Jornal não encontrado.' });
      return;
    }
    res.json(newspaper);
  }

  async delete(req: Request, res: Response) { 
    const { id } = req.params;
    const newspaper = await Newspaper.findByIdAndDelete(id);
    if (!newspaper) {
      res.status(404).json({ detail: 'Jornal não encontrado.' });
      return;
    }
    res.json({ detail: 'Jornal removido com sucesso.' });
  }
}