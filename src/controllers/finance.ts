import { Request, Response } from 'express';
import Finance from '../models/finance';

export class FinanceController {
  async findAll(req: Request, res: Response) {
    const finances = await Finance.find();
    res.json(finances);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const finance = await Finance.findById(id);
    if (!finance) {
      res.status(404).json({ detail: 'Finança não encontrada.' });
      return;
    }
    res.json(finance);
  }

  async create(req: Request, res: Response) {
    const finance = new Finance(req.body);
    await finance.save();
    res.status(201).json(finance);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const finance = await Finance.findByIdAndUpdate(id, req.body, { new: true });
    if (!finance) {
      res.status(404).json({ detail: 'Finança não encontrada.' });
      return;
    }
    res.json(finance);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const finance = await Finance.findByIdAndDelete(id);
    if (!finance) {
      res.status(404).json({ detail: 'Finança não encontrada.' });
      return;
    }
    res.json({ detail: 'Finança removida com sucesso.' });
  }
}