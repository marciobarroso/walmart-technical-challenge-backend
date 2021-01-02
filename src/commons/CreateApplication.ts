import express, { Application } from 'express'
import cors from 'cors'
import compression from 'compression'

import router from '../routers'
import Logger, { LoggerMiddleware } from './Logger'
import DatabaseConnection from './DatabaseConnection'
import IApplicationConfiguration, {defaultApplicationConfiguration} from './IApplicationConfiguration'

export default async function CreateApplication(config: IApplicationConfiguration = defaultApplicationConfiguration): Promise<Application> {
  Logger.info(`Configure ${config.app.name}`)
  const application = express()

  // create database connection
  DatabaseConnection(config.db.uri).then(() => {
    Logger.info('Database Connection Successful Created')
    application.emit('ready')
  })
  
  // configure middlewares
  application.use(cors())
  application.use(express.json())
  application.use(compression())
  application.use(LoggerMiddleware)
  application.disable('etag')

  // set routes prefix
  application.use(config.app.prefix, router)

  return application.on('ready', async () => Promise.resolve(application))
}