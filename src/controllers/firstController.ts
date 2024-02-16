import { Request, Response } from 'express';

export const getRoute1 = (req: Request, res: Response) => res.send('GET request ');

export const postRoute1 = (req: Request, res: Response) => res.send('POST request');

export const deleteRoute1 = (req: Request, res: Response) => res.send('DELETE request ');
