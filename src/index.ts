import CreateApplication from './commons/CreateApplication'
import Config from './commons/Config'
import Logger from './commons/Logger'

CreateApplication().then(application => {
  application.listen(Config.get('app.port'), () => {
    Logger.info(
      `${Config.get('app.name')} running on port ${Config.get('app.port')}`
    )
  })
})