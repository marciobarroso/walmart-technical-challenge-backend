import Logger from '../commons/Logger';
import Product, { IProduct } from '../models/Product';

export const search = async (filter: string) : Promise<IProduct[]> => {
  try {
    Logger.info('Calling Product Search Service')
    Logger.info('Filter : ' + filter)

    // valid filter
    if (filter && filter !== "") {
      if (!isNaN(+filter)) { // check if the filter match an numeric id
        console.log('Searching by id')
        return [await Product.findById(Number(filter))]
      } else { // trying to match brand and description fields with provided filter
        console.log('Searching with like')

        const like = new RegExp(`.*${filter}.*`)
        return await Product.find({
          $or: [
            { brand: { $regex: like, $options: 'i' } },
            { description: { $regex: like, $options: 'i' } }
          ]
        })
      }
    } else {
      console.log('Searching all products')
      Logger.info('Listing all products')
      return await Product.find()
    }
  } catch (error) {
    Logger.error(error)
    return Promise.reject()
  }
}