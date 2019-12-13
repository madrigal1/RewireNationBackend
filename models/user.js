const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//const geo Schema
const geoSchema = new Schema({
    type: {
        type:String,
        default: "Point"
    },
    coordinate: {
        type: [Number],
        index: "2dsphere"
    }
});

//create user schema
const CustomerSchema = new Schema({
    name :{
         type: String,
         required: [true,"Name field is required"]
    },
    rank: {
        type: String,
    },
    available: {
        type:Boolean,
        default: false,
    },
    geometry : geoSchema
});

const Customer = mongoose.model('user',CustomerSchema);
module.exports = Customer;