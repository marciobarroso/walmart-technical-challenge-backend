import convict from 'convict'

const Config = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'production',
    env: 'NODE_ENV',
    arg: 'node-env',
  },
  log: {
    path: {
      doc: 'Directory to store the logs',
      default: './logs',
      env: 'LOG_PATH',
      arg: 'LOG_PATH',
    },
    name: {
      doc: 'File name',
      default: 'lider-supermercado',
      format: String,
      env: 'LOG_NAME',
      arg: 'LOG_NAME',
    },
    level: {
      doc: 'The log level.',
      format: ['info', 'debug', 'error', 'silly', 'none'],
      default: 'info',
      env: 'LOG_LEVEL',
      arg: 'LOG_LEVEL',
    },
    style: {
      doc: 'Logger implementation using Morgan',
      format: ['combined', 'common', 'dev'],
      default: 'combined',
    },
  },
  app: {
    name: {
      doc: 'The application name.',
      format: String,
      default: 'Lider Supermercado API',
    },
    path: {
      doc: 'The application path',
      format: String,
      default: '/api/v1',
    },
    port: {
      doc: 'The port to bind.',
      format: 'port',
      default: 3000,
      env: 'PORT',
      arg: 'port',
    },
  },
  db: {
    uri: {
      doc: 'The connection URI',
      format: String,
      default: '',
      env: 'DB_URI',
    },
  },
})

const env = Config.get('env')
Config.loadFile(`./config/${env}.json`)
Config.validate({ allowed: 'strict' })
Config.validate({ allowed: 'warn' })

export default Config