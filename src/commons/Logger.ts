import morgan from 'morgan'
import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

import Config from './Config'

const level = Config.get('log.level')
const directory = Config.get('log.path')
const name = Config.get('log.name')

const Logger = createLogger({
  level: level,
  format: format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level} : ${info.message}`
        )
      ),
    }),
    new DailyRotateFile({
      format: format.printf(
        info => `${info.timestamp} ${info.level} : ${info.message}`
      ),
      dirname: directory,
      filename: name + '-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

export const LoggerMiddleware = morgan(Config.get('log.style'), {
  stream: { write: message => Logger.debug(message) },
})

export default Logger
