import { Request, Response, RequestHandler } from 'express'

export const index : RequestHandler = async (req: Request, res: Response) => {
  return res.status(200).json({ message: 'I am alive' })
}