const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let apartamentSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  }
}, {
    collection: 'lista_apart'
  })

module.exports = mongoose.model('Apartament.model', apartamentSchema)