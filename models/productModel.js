const { default: mongoose } = require("mongoose");

const reviewSchema = mongoose.Schema({ //this is used for giving user reviews along with the comments

    userid : {
        type : mongoose.Schema.Types.ObjectId
    } ,
    name : {
        type : String , 
        require : true
    } ,
    comment : {
        type : String 
    } , 
    rating : {
        type:Number , 
        require : true
    } 

} , {
    timeStamps : true
})

const productSchema = mongoose.Schema({ //here we are creating a product schema
    name : {
        type:String , 
        require : true
    } , 
    image : {
        type:String,
        require:true
    } ,
    category : {
        type:String,
        require:true
    } ,
    description : {
        type:String ,
        require:true
    } ,
    price : {
        type:Number ,
        require:true
    } ,
    countInStock : {
        type:Number ,
        require:true
    } ,
    rating :{
        type:Number ,
        require:true,
        default : 0
    } ,

    reviews : [reviewSchema]

} , {
   timeStamps : true // for date on which it was created
})

const Product = mongoose.model('products' , productSchema )
module.exports = Product //exporting because we need to use this product model in some other roots

