import { Request, Response } from 'express';
import News from '../models/news';

export class NewsController {
  async findAll(req: Request, res: Response) {
    const news = await News.find();
    res.json(news);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const news = await News.findById(id);
    if (!news) {
      res.status(404).json({ detail: 'Notícia não encontrada.' });
      return;
    }
    res.json(news);
  }

  async create(req: Request, res: Response) {
    const news = new News(req.body);
    await news.save();
    res.status(201).json(news);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const news = await News.findByIdAndUpdate(id, req.body, { new: true });
    if (!news) {
      res.status(404).json({ detail: 'Notícia não encontrada.' });
      return;
    }
    res.json(news);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const news = await News.findByIdAndDelete(id);
    if (!news) {
      res.status(404).json({ detail: 'Notícia não encontrada.' });
      return;
    }
    res.json({ detail: 'Notícia removida com sucesso.' });
  }
}