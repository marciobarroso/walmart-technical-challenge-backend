import { agent } from '../../supertest'

it('should return 200 and a full list of products', async done => {  
  agent
    .get('/api/v1/products')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err)
      expect(res.body.length).toBe(3000)
      done()
    })
})

