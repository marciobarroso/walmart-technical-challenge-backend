import { agent } from '../../supertest'

it('should return 200 and the message I am alive', async done => {
  agent
    .get('/api/v1/health-check')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err)
      expect(res.body).toMatchObject({'message': 'I am alive'})
      done()
    })
})

