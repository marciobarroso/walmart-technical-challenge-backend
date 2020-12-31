import mongoose, { Connection, ConnectionOptions } from 'mongoose'

import Logger from './Logger'
import Config from './Config'

export default async function DatabaseConnection(): Promise<Connection> {
  Logger.info(`Configure Database`)

  if (mongoose.connection.readyState === 1) {
    Logger.info(`Database already connected!`)
    return Promise.resolve(mongoose.connection)
  }
  
  const host = Config.get('db.ip')
  const port = Config.get('db.port')
  const database = Config.get('db.name')
  const user = Config.get('db.username')
  const pass = Config.get('db.password')
  const uri = `mongodb://${user}:${pass}@${host}:${port}/${database}?authSource=admin`

  Logger.info(`Connecting mongodb on ${host}:${port}/${database} with user ${user}`)

  const options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  return await mongoose.connect(
    uri,
    options
  ).then(() => {
    mongoose.connection.on('disconnected', DatabaseConnection)
    return Promise.resolve(mongoose.connection)
  }).catch(error => {
    Logger.error(error)
    return Promise.reject(error)
  })
}