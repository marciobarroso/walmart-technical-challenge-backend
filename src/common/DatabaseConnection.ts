import mongoose, { Connection } from 'mongoose'

import Logger from './Logger'
import Config from './Config'

export default async function DatabaseConnection(): Promise<Connection> {
  Logger.info(`Configure Database`)

  if (mongoose.connection.readyState === 1) {
    Logger.info(`Database already connected!`)
    return Promise.resolve(mongoose.connection)
  }

  return await mongoose.connect(
    `mongodb://${Config.get('db.username')}:${Config.get('db.password')}@${Config.get('db.ip')}:${Config.get('db.port')}/${Config.get('db.name')}?authSource=admin`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  ).then(() => {
    mongoose.connection.on('disconnected', DatabaseConnection)
    return Promise.resolve(mongoose.connection)
  }).catch(error => {
    Logger.error(error)
    return Promise.reject(error)
  })
}