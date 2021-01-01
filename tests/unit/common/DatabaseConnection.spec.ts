import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server';
import DatabaseConnection from '../../../src/commons/DatabaseConnection';

const spyOnConnect = jest.spyOn(mongoose, 'connect')

beforeAll(async () => {
  const mongo = new MongoMemoryServer();
  const uri = await mongo.getUri();

  await DatabaseConnection(uri)
})

it('should the database connection be ready', () => {
  expect(mongoose.connection.readyState).toBe(1)
})

it('should the connection method to be called once', () => {
  expect(spyOnConnect).toBeCalledTimes(1)
})