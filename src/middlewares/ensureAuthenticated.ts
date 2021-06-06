import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import auth from '../config/auth';

export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('Você não está logado!');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, auth.secret);

    req.body.user = {
      id: decoded,
    };

    return next();
  } catch (e) {
    throw new Error('Token inválido');
  }
}
