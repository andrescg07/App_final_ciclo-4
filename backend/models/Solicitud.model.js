const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Apartament = './Apartament.model.js'

let solicitudSchema = new Schema({
  name: {
    type: String
  },
  lastName: {
    type: String
  },
  id: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  apartament: { 
    type: Schema.ObjectId, ref: Apartament
  }
}, {
    collection: 'contratos_arriendos'
  })

module.exports = mongoose.model('Solicitud.model', solicitudSchema)