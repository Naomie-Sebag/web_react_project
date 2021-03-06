const mongoose = require('mongoose')

const user = new mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    fullName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    isManager:{
        type:String,
        default:false
    },
    date:{
        type:Date,
        default:Date.now
    },
    city:{
        type:String,
        required: true
    }

})

module.exports = mongoose.model('mytable', user)