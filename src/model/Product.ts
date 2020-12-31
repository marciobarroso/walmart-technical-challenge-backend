import mongoose, { Schema } from 'mongoose'

const ProductSchema: Schema = new Schema(
  {
    _id: { type: Number, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
  }
)

export default mongoose.model('Product', ProductSchema)