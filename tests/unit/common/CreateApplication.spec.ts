import { application } from '../../supertest'

it('should the application emit ready status', async done => {
  application.on('ready', () => {
    expect(true).toBe(true)
    done()
  })
})