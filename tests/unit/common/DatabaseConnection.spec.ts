import mongoose from 'mongoose'

import { application } from '../../supertest'

it('should the DatabaseConnection be initialized correctly', () => {
  const spy = jest.spyOn(mongoose.connection, 'on')
  application.on('ready', () => {
    expect(spy).toBeCalledTimes(1)
  })
})

it('should the database connection be ready', () => {
  application.on('ready', () => {
    expect(mongoose.connection.readyState).toBe(1)
  })
})

it('should the connection method to be called once', () => {
  const spy = jest.spyOn(mongoose, 'connect')
  application.on('ready', () => {
    expect(spy).toBeCalledTimes(1)
  })
})