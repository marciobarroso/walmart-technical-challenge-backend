import Logger from './Logger'

export function DatabaseConnection(): Promise<void> {
  Logger.info("database connected =)")
  return Promise.resolve()
}