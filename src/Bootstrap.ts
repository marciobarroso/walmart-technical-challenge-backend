import express, { Application } from 'express'
import cors from 'cors'
import compression from 'compression'

import router from './router'
import Logger, {LoggerMiddleware} from './common/Logger'

export default class Bootstrap {

  private application: Application

  public constructor() {
    Logger.info('Build Express Application')
    this.application = express()
    this.configure()
  }

  private configure() {
    Logger.info('Configure Express Application')
    
    this.application.use(cors())
    this.application.use(express.json())
    this.application.use(compression())
    this.application.use(LoggerMiddleware)
    this.application.disable('etag')

    this.application.use('/api/v1', router)
    
    this.application.listen(3000, () => {
      Logger.info('Express Application Ready on port 3000')
    })
  }

  public getApplication(): Application {
    return this.application
  }
}