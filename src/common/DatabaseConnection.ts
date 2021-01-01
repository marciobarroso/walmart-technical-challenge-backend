import mongoose from 'mongoose'

import Logger from './Logger'

export default async function DatabaseConnection(uri: string): Promise<void> {
  Logger.info(`Configure Database`)
  await mongoose.connect(
    uri, { useNewUrlParser: true, useUnifiedTopology: true }
  )
}