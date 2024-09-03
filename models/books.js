const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imageURL: { type: String, default: 'http://placekitten.com/400/400' },
    description: { type: String, required: true },
    year: { type: Number },
    quantity: { type: Number },
})

// bookSchema.methods.showEstablished = function() {
//     return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
// }

module.exports = mongoose.model('Book', bookSchema)