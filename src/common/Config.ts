import convict from 'convict'

const Config = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['prod', 'dev', 'test'],
    default: 'dev',
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
    ip: {
      doc: 'The IP address to bind.',
      format: String,
      default: '127.0.0.1',
      env: 'DB_IP_ADDRESS',
    },
    port: {
      doc: 'The port to bind.',
      format: 'port',
      default: 27017,
      env: 'DB_PORT',
    },
    username: {
      doc: 'The database username.',
      default: 'default_username',
      format: String,
      sensitive: true,
      env: 'DB_USERNAME',
    },
    password: {
      doc: 'The database password.',
      default: 'default_password',
      format: String,
      sensitive: true,
      env: 'DB_PASSWORD',
    },
    name: {
      doc: 'The database name.',
      default: 'default_database',
      format: String,
      sensitive: true,
      env: 'DB_NAME',
    },
  },
})

const env = Config.get('env')
Config.loadFile(`./config/${env}.json`)
Config.validate({ allowed: 'strict' })
Config.validate({ allowed: 'warn' })

export default Config