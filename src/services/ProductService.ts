import Logger from '../commons/Logger'
import Product from '../models/Product'
import IProduct from '../models/IProduct'
import IDetachedProduct from '../models/IDetachedProduct'
import { check } from './PalindromeService'
import { isEmpty, isNumeric } from '../../src/util/Validation'

export const search = async (filter: string) : Promise<IDetachedProduct[]> => {
  try {
    Logger.debug('Calling Product Search Service')
    Logger.debug('Filter : ' + filter)

    let products: IProduct[]

    if (filter !== undefined && isNumeric(filter)) {
      Logger.debug('Filter is a valid number. Trying to find product by id')
      products = [await Product.findById(Number(filter))]
    } else if (filter !== undefined && !isEmpty(filter) && filter.length > 3) {
      Logger.debug('Filter is string greater than 3')
      const like = new RegExp(`.*${filter}.*`)
      products = await Product.find({
        $or: [
          { brand: { $regex: like, $options: 'i' } },
          { description: { $regex: like, $options: 'i' } }
        ]
      })
    } else {
      Logger.debug('Listing all products')
      products = await Product.find()
    }

    // apply filter for discount
    return applyDiscountForPalindrome(filter, products, 50)
  } catch (error) {
    Logger.error(error)
    return Promise.reject()
  }
}

export const toDetachedProduct = (product: IProduct): IDetachedProduct => {
  const result: IDetachedProduct = {
    _id: product._id,
    brand: product.brand,
    description: product.description,
    image: product.image,
    price: product.price,
    discount: 0
  }
  return result
}

export const applyDiscountForPalindrome = (filter: string, products: IProduct[], discount: number): IDetachedProduct[] => {
  Logger.debug('applyDiscountForPalindrome')
  
  const allProducts: IDetachedProduct[] = []

  // convert to pain object
  products.forEach(product => {
    const converted: IDetachedProduct = toDetachedProduct(product)
    allProducts.push(converted)
  })

  // check for the discount
  if (check(filter)) {
    Logger.debug('The filter ' + filter + ' is a palindrome')
    Logger.debug('Setting discount for matched products')
    allProducts.forEach(product => {
      product.discount = discount
    })
  }

  return allProducts
}