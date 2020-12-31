import { Application } from 'express'
import CreateApplication from '../../../src/common/CreateApplication'

let application: Application

describe('Running tests for CreateApplication module', () => {
  
  it('should create a valid application', async () => {
    application = await CreateApplication()
    application.on('ready', () => {
      expect(true)
    })
    application.emit('ready')
  })
  
})