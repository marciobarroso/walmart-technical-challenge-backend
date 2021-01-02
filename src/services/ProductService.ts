import Logger from '../commons/Logger';
import Product, { IProduct } from '../models/Product';
import { check } from './PalindromeService';

export const search = async (filter: string) : Promise<IProduct[]> => {
  try {
    Logger.info('Calling Product Search Service')
    Logger.info('Filter : ' + filter)

    // valid filter
    if (filter && filter !== "") {
      if (!isNaN(+filter)) { // check if the filter match an numeric id
        const results = [await Product.findById(Number(filter))]
        return applyDiscountForPalindrome(filter, results, 50)
      } else if(filter && filter !== "" && filter.length >= 3) { // trying to match brand and description fields with provided filter
        const like = new RegExp(`.*${filter}.*`)
        const results = await Product.find({
          $or: [
            { brand: { $regex: like, $options: 'i' } },
            { description: { $regex: like, $options: 'i' } }
          ]
        })
        return applyDiscountForPalindrome(filter, results, 50)
      } else {
        return Promise.resolve([]) // if the filter does not match returns a empty array
      }
    } else {
      Logger.info('Listing all products')
      return await Product.find()
    }
  } catch (error) {
    Logger.error(error)
    return Promise.reject()
  }
}

const applyDiscountForPalindrome = (filter: string, products: IProduct[], discount: number): IProduct[] => {
  if (check(filter)) {
    products.forEach(product => {
      product.discount = discount
    })
  }
  return products
}