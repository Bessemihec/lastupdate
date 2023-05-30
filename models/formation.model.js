const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormationSchema = new Schema({
    type: String,
    date: String,
    offre: String,
    user: [String],
    nombre_candidat: String,
    adresse:String,
    Documents_demandes:String,
    url:String,
    code_access:String,
  }, {timestamps: true})



module.exports = mongoose.model('formation', FormationSchema)