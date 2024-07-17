import { Request, Response } from 'express';
import { getUserById } from '../models/UserModel';

export const getUser = (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = getUserById(userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
