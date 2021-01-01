import { Server } from 'http'
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Application } from 'express';
import request, { SuperAgentTest } from 'supertest'

import CreateApplication from '../src/commons/CreateApplication'
import { products } from './data/products'
import Product from '../src/models/Product';
import IApplicationConfiguration from '../src/commons/IApplicationConfiguration'

export let application: Application
export let server: Server
export let agent: SuperAgentTest

// populate in memory database for tests
async function populate() {
  products.forEach(product => {
    Product.create(product)
  })
}

beforeAll(async done => {
  // avoid creation of unnecessary resources
  if( server !== undefined && application !== undefined ) done()

  const mongo = new MongoMemoryServer();
  const uri = await mongo.getUri();

  const configuration: IApplicationConfiguration = {
    app: {
      name: 'test app',
      prefix: '/api/v1'
    },
    db: {
      uri
    }
  }

  CreateApplication(configuration).then(app => {
    application = app
    server = application.listen(() => {
      agent = request.agent(server)
      populate()
      done()
    })
  })
})