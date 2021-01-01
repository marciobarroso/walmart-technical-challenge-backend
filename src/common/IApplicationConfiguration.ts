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
    uri: `mongodb://${Config.get('db.username')}:${Config.get('db.password')}@${Config.get('db.ip')}:${Config.get('db.port')}/${Config.get('db.name')}?authSource=admin`
  }
}