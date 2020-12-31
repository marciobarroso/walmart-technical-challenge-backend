import express, { Application } from 'express'
import cors from 'cors'
import compression from 'compression'

import router from './router'
import Logger, { LoggerMiddleware } from './common/Logger'
import Config from './common/Config'
export default class Bootstrap {

  private application: Application

  public constructor() {
    Logger.info(`Build ${Config.get('app.name')}`)
    this.application = express()
    this.configure()
  }

  private configure() {
    Logger.info(`Configure ${Config.get('app.name')}`)
    
    this.application.use(cors())
    this.application.use(express.json())
    this.application.use(compression())
    this.application.use(LoggerMiddleware)
    this.application.disable('etag')

    this.application.use(Config.get('app.path'), router)
    
    this.application.listen(Config.get('app.port'), () => {
      Logger.info(`${Config.get('app.name')} Ready on port ${Config.get('app.port')}`)
    })
  }

  public getApplication(): Application {
    return this.application
  }
}