const mongoose= require('mongoose'); //this is the backend part of registration page
const userSchema = mongoose.Schema({

    name : {
        type:String,
        require
    },
    email : {
        type:String,
        require
    } , 
    password : {
        type:String,
        require
    } , 
    isAdmin : {
        type:Boolean,
        default:false
    }

})
const User = mongoose.model('users' , userSchema)

module.exports=User