import { application } from '../../supertest'

it('should the application be initialized correctly', () => {
  const spy = jest.spyOn(application, 'use')

  application.on('ready', () => {
    expect(spy).toBeCalledTimes(5)
  })
})