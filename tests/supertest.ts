import { Server } from 'http'
import request, { SuperAgentTest } from 'supertest'
import CreateApplication from '../src/common/CreateApplication'

let server: Server
export let agent: SuperAgentTest

beforeAll(async done => {
  CreateApplication().then(application => {
    server = application.listen(() => {
      agent = request.agent(server)
      done()
    })
  })
})

afterAll(async () => {
  server.close()
})