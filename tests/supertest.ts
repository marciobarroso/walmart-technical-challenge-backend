import { Server } from 'http'
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Application } from 'express';
import request, { SuperAgentTest } from 'supertest'

import CreateApplication from '../src/common/CreateApplication'
import { products } from './data/products'
import Product from '../src/model/Product';

let application: Application
let server: Server
export let agent: SuperAgentTest

// populate in memory database for tests
async function populate() {
  products.forEach(product => {
    Product.create(product)
  })
}

beforeAll(async done => {
  // avoid creation of unnecessary resources
  if( mongoose.connection.readyState === 1 ) done()
  
  const mongod = new MongoMemoryServer();
  const uri = await mongod.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  await mongoose.connect(uri, mongooseOpts)
  await populate()
  done()
})

beforeAll(async done => {
  // avoid creation of unnecessary resources
  if( server !== undefined ) done()

  CreateApplication().then(application => {
    server = application.listen(() => {
      agent = request.agent(server)
      done()
    })
  })
})