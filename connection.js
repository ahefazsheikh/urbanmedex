const mongoose = require ('mongoose')

async function data() {

    mongoose.connect('mongodb://localhost:27017/urbanmedex')
    
}

module.exports={data}