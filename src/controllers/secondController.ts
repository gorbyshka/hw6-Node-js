import { Request, Response } from 'express';

export const getRoute2 = (req: Request, res: Response) => res.send('GET2 request');

export const postRoute2 = (req: Request, res: Response) => res.send('POST2 request');

export const deleteRoute2 = (req: Request, res: Response) => res.send('DELETE2 request');
