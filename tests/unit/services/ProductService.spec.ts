import { search } from '../../../src/services/ProductService'

jest.mock('../../../src/models/Product', () => ({
  findById: jest.fn().mockReturnValue(
    {
      "_id": 5,
      "brand": "peuoooypt",
      "description": "trcwl iagxxh",
      "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
      "price": 814893
    }
  ),
  find: jest.fn().mockReturnValue(Promise.resolve(
    [
      {
        "_id": 1,
        "brand": "ooy eqrceli",
        "description": "rlñlw brhrka",
        "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
        "price": 498724
      },
      {
        "_id": 63,
        "brand": "saddas",
        "description": "wbwym yzgjip",
        "image": "www.lider.cl/catalogo/images/bicycleIcon.svg",
        "price": 200322
      },
      {
        "_id": 3,
        "brand": "weñxoab",
        "description": "hqhoy qacirk",
        "image": "www.lider.cl/catalogo/images/homeIcon.svg",
        "price": 171740
      },
      {
        "_id": 1572,
        "brand": "sbzznqi",
        "description": "hññhd dwirfm",
        "image": "www.lider.cl/catalogo/images/bedRoomIcon.svg",
        "price": 694498
      },
      {
        "_id": 5,
        "brand": "peuoooypt",
        "description": "trcwl iagxxh",
        "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
        "price": 814893
      },
      {
        "_id": 67,
        "brand": "dasfsad",
        "description": "lzet scsdqzfp",
        "image": "www.lider.cl/catalogo/images/toysIcon.svg",
        "price": 9268
      },
      {
        "_id": 2082,
        "brand": "xfzslkf",
        "description": "hññhd dwirfm",
        "image": "www.lider.cl/catalogo/images/smartphoneIcon.svg",
        "price": 367902
      },
      {
        "_id": 8,
        "brand": "sfzkvoñ",
        "description": "hdvt tbrdeiñl",
        "image": "www.lider.cl/catalogo/images/tvIcon.svg",
        "price": 428894
      },
      {
        "_id": 9,
        "brand": "nzo acrrñvh",
        "description": "ahelf lxhñep",
        "image": "www.lider.cl/catalogo/images/tvIcon.svg",
        "price": 29530
      },
      {
        "_id": 64,
        "brand": "aypwtañ",
        "description": "hññhd dwirfm",
        "image": "www.lider.cl/catalogo/images/electronicsIcon.svg",
        "price": 831244
      },
    ]
  ))
}))

import Product from '../../../src/models/Product'

beforeEach(() => {
  jest.clearAllMocks();
})

it('should call Product.find method', () => {
  const spy = jest.spyOn(Product, 'find')
  search('')
  expect(spy).toHaveBeenCalledTimes(1)  
})

it('should return 10 products when no filter is provided', async done => {
  const spy = jest.spyOn(Product, 'find')
  search('').then(result => {
    expect(result.length).toBe(10)
    expect(spy).toHaveBeenCalled()
    done()
  })
})

it('should call method findById when a valid id is provided on filter', () => {
  const spy = jest.spyOn(Product, 'findById')
  search('5')
  expect(spy).toHaveBeenCalledWith(5)
})

it('should call method find using regex to match filter on brand and description field', () => {
  const spy = jest.spyOn(Product, 'find')
  search('adda')
  expect(spy).toHaveBeenCalledWith({"$or": [{"brand": {"$options": "i", "$regex": /.*adda.*/}}, {"description": {"$options": "i", "$regex": /.*adda.*/}}]})
})