import { Request, Response, RequestHandler } from 'express'

import Logger from '../common/Logger'
import Product from '../model/Product'

export const index : RequestHandler = async (req: Request, res: Response) => {
  try {
    Logger.info('List all products : ', req.query.filter)
    const products = await Product.find()
    return res.json(products)
  } catch (error) {
    Logger.error(error)
    res.status(500).json(error)
  }
}