require('../../supertest')

import { search } from '../../../src/services/ProductService'

it('should return all 3000 products when the filter is empty', async done => {
  search('').then(results => {
    expect(results.length).toBe(3000)
    done()
  })
})

it('should return 1 specific product when a valid id is provided', async done => {
  search('180').then(results => {
    expect(results.length).toBe(1)
    expect(results[0]._id).toBe(180)
    expect(results[0].discount).toBe(0)
    done()
  })
})

it('should return 80 products that match the world adda in brand and description field', async done => {
  search('adda').then(results => {
    expect(results.length).toBe(23)
    done()
  })
})

it('should return 1 specific product with 50% discount when a palindrome id is provided', async done => {
  search('181').then(results => {
    expect(results.length).toBe(1)
    expect(results[0]._id).toBe(181)
    expect(results[0].brand).toBe('rvblsml')
    expect(results[0].description).toBe('goeyxg nbowu')
    expect(results[0].price).toBe(775722)
    expect(results[0].discount).toBe(50)
    done()
  })
})

it('should return 11 products with 50% discount when the fields brand and description match a palindrome', async done => {
  search('asdsa').then(results => {
    expect(results.length).toBe(11)
    expect(results[0].discount).toBe(50)
    expect(results[1].discount).toBe(50)
    expect(results[2].discount).toBe(50)
    expect(results[3].discount).toBe(50)
    expect(results[4].discount).toBe(50)
    expect(results[5].discount).toBe(50)
    expect(results[6].discount).toBe(50)
    expect(results[7].discount).toBe(50)
    expect(results[8].discount).toBe(50)
    expect(results[9].discount).toBe(50)
    expect(results[10].discount).toBe(50)
    done()
  })
})