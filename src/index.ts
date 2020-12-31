import CreateApplication from './common/CreateApplication'
import Config from './common/Config'
import Logger from './common/Logger'

CreateApplication().then(application => {
  application.listen(Config.get('app.port'), () => {
    Logger.info(
      `${Config.get('app.name')} running on port ${Config.get('app.port')}`
    )
  })
})