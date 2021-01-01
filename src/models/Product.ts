import mongoose, { Schema, Document } from 'mongoose'
export interface IProduct extends Document {
  _id: number
  brand: string
  description: string
  image: string
  price: number
}

const ProductSchema: Schema = new Schema(
  {
    _id: { type: Number, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
  }
)

export default mongoose.model<IProduct>('Product', ProductSchema)