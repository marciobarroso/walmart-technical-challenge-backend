import fs from 'fs'
import morgan from 'morgan'
import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

const level = 'info'
const directory = './logs'
const name = 'application'

if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory)
}

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

export const LoggerMiddleware = morgan('dev', {
  stream: { write: message => Logger.info(message) },
})

export default Logger
