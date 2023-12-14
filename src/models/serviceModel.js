const mongoose= require('mongoose');
const serviceSchema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
    ,
    serial_code:{
        type:String
    },
   
    status:{
    type:String,
    enum:["complete","not_complete"]
    },
    createdAt: {
        type: Date,
        default: new Date(),
      },
      updateAt:{
        type: Date
      }

}, {timestamps:true})
const serviceModule= mongoose.model('Service', serviceSchema)
module.exports= serviceModule;
