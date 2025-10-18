import { Request } from 'express';

declare global {
  interface model {
    test: number;
  }

  namespace Express {
    interface Request {
      user?: model;
    }
  }
}

export {};
