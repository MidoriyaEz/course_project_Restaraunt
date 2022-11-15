const mongoose = require ('mongoose')
const Shema = mongoose.Schema

const categoryShema = new Shema({
    name: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        default: ''
    },
    user: {
        ref: 'users',
        type: Shema.Types.ObjectId
    }
})

module.exports = mongoose.module('categories', categoryShema)