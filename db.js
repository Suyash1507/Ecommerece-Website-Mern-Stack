const { default: mongoose } = require("mongoose");

var mongoDBURL= 'mongodb+srv://suyash:suyash@cluster0.sag6v.mongodb.net/ecommerceProject' // this is the URL for our database
mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})//we create object of database using mongoose 
var dbconnect = mongoose.connection 
dbconnect.on('error' , ()=>{ //to check if dbconnect is successfull or not
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})
module.exports = mongoose //export the mongoose object because we need to import it in server.js