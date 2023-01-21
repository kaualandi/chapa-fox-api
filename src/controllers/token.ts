import Token from '../models/token';

export class TokenController {
  async findOne(id: string) {
    const token = await Token.findById(id);
    if (!token) {
      return null;
    }
    return token;
  }

  async create(userId: string) {
    const token = new Token({ user: userId });
    await token.save();
    return token;
  }
}