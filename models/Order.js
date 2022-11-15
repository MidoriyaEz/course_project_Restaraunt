const mongoose = require ('mongoose')
const Shema = mongoose.Schema

const orderShema = new Shema({
    user: {
        ref: 'users',
        type: Shema.Types.ObjectId
    },
    date: {
        type: Date,
        default: Date.now
    },
    order: {
        type: Number,
        required: true
    },
    list:[{
        name: {
            type: String
        },
        quantity: {
            type: Number
        },
        cost: {
            type: Number
        }
    }]
})

module.exports = mongoose.module('orders', orderShema)