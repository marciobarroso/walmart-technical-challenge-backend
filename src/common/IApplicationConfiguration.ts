import Config from './Config';

export default interface IApplicationConfiguration {
  app: {
    name: string,
    prefix: string
  },
  db: {
    host: string,
    port: string,
    name: string,
    username: string,
    password: string
  }
}

export const defaultApplicationConfiguration: IApplicationConfiguration = {
  app: {
    name: Config.get('app.name'),
    prefix: Config.get('app.path')
  },
  db: {
    host: Config.get('db.ip'),
    port: Config.get('db.port'),
    name: Config.get('db.name'),
    username: Config.get('db.username'),
    password: Config.get('db.password')
  }
}