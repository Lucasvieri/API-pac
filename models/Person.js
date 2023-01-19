const mongoose = require ('mongoose')

const Person = mongoose.model('Person', {
    name: String,
    healthlnsuranceCardld: Number,
    address: String,
    createdAt: String, 

})

module.exports = Person 