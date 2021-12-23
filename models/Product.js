const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let productSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  created: {
    type: Date, 
    default : Date.now()
  },
  updated: {
    type: Date, 
    default : Date.now()
  }
}, {
    collection: 'product'
  })

module.exports = mongoose.model('Product', productSchema)