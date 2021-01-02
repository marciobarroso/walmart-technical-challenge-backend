import { Document } from 'mongoose'

export default interface IProduct extends Document {
  _id: number
  brand: string
  description: string
  image: string
  price: number
  discount: number
}