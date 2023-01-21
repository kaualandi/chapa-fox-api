import { Request, Response } from 'express';
import Event from '../models/event';

export class EventController {
  async findAll(req: Request, res: Response) {
    const events = await Event.find();
    res.json(events);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (!event) {
      res.status(404).json({ message: 'Evento não encontrado.' });
      return;
    }
    res.json(event);
  }

  async create(req: Request, res: Response) {
    const event = await Event.create(req.body);
    await event.save();
    res.json(event);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
    if (!event) {
      res.status(404).json({ message: 'Evento não encontrado.' });
      return;
    }
    res.json(event);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      res.status(404).json({ message: 'Evento não encontrado.' });
      return;
    }
    res.json({ message: 'Evento removido com sucesso.' });
  }
}