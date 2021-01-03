import { Request, Response, RequestHandler } from 'express'

import { search } from '../services/ProductService'
import Logger from '../commons/Logger'

export const index : RequestHandler = async (req: Request, res: Response) => {
  try {
    const filter: string = req.query.filter as string
    const page = req.query.page as string
    const products = await search(filter, Number.parseInt(page))
    return res.json(products)
  } catch (error) {
    Logger.error(error)
    res.status(500).json(error)
  }
}