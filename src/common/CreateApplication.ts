import express, { Application } from 'express'
import cors from 'cors'
import compression from 'compression'

import router from '../router'
import Logger, { LoggerMiddleware } from './Logger'
import Config from './Config'
import { DatabaseConnection } from './DatabaseConnection'

export default async function CreateApplication(): Promise<Application> {
  Logger.info(`Configure ${Config.get('app.name')}`)
  const application = express()

  Logger.info(`Configure database connection`)
  DatabaseConnection().then(() => {
    Logger.info('Database Connection Successful Created')
    application.emit('ready')
  }).catch(error => Logger.error(error))
    
  application.use(cors())
  application.use(express.json())
  application.use(compression())
  application.use(LoggerMiddleware)
  application.disable('etag')

  application.use(Config.get('app.path'), router)

  return application.on('ready', async () => Promise.resolve(application))
}