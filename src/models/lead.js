const { Schema, model } = require('mongoose');

// register a new lead and qualify it

const leadSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://myrealdomain.com/images/empty-profile-picture-4.gif'
    },
    projectArea: String,
    phone: {
        type: String,
        required:true,
    },
    howItArrived: String,
    decisionMaker: {
        type: Boolean,
        default: false
    },
    knowsAboutCPE: {
        type: Boolean,
        default: false
    },
    numberOfEmployees: Number,
    segment: String,
    responsible: String,
    details: String,
    returnDate: Date,
    status: {
        type: String,
        enum: ['Não iniciado', 'Retornar', 'Em progresso', 'Assinado', 'Cancelado'],
        default: 'Não iniciado'
      }
}, {
    timestamps:true,
});

module.exports = model('Lead', leadSchema);