import Config from './Config';

export default interface IApplicationConfiguration {
  app: {
    name: string,
    prefix: string
  },
  db: {
    uri: string
  }
}

export const defaultApplicationConfiguration: IApplicationConfiguration = {
  app: {
    name: Config.get('app.name'),
    prefix: Config.get('app.path')
  },
  db: {
    uri: Config.get('db.uri')
  }
}