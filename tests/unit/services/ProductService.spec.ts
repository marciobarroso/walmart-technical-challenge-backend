import { search } from '../../../src/services/ProductService'

jest.mock('../../../src/models/Product', () => ({
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
        "_id": 2,
        "brand": "dsaasd",
        "description": "zlrwax bñyrh",
        "image": "www.lider.cl/catalogo/images/babyIcon.svg",
        "price": 130173
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
        "_id": 6,
        "brand": "ñuo onfbtya",
        "description": "vangde oswss",
        "image": "www.lider.cl/catalogo/images/homeIcon.svg",
        "price": 468750
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

it('should call Product.find method', () => {
  search('')
  expect(Product.find).toHaveBeenCalledTimes(1)  
})

it('should return 10 products when no filter is provided', async done => {
  search('').then(result => {
    expect(result.length).toBe(10)
    done()
  })
})

it('should return 1 products with 50% discount when the a valid id is provided on filter', async done => {
  search('5').then(result => {
    expect(result.length).toBe(1)
    expect(result[0].brand).toBe('peuoooypt')
    expect(result[0].description).toBe('trcwl iagxxh')
    expect(result[0].image).toBe('www.lider.cl/catalogo/images/whiteLineIcon.svg')
    expect(result[0].price).toBe(814893 / 2) // match 50% of discount
    done()
  })
})

it('should return 2 products that matchs with the provided filter with 50% discount', async done => {
  search('hññh').then(result => {
    expect(result[0].price).toBe(694498 / 2)
    expect(result[1].price).toBe(367902 / 2)
    expect(result[2].price).toBe(831244 / 2)
    done()
  })
})