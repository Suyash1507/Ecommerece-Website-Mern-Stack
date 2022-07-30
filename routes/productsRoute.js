const express = require("express");
const router= express.Router(); //express router is initialised
const Product = require('../models/productModel')

//with the help of router objects we can create routes with get method as well as post method
//fetching details from mongo db

router.get("/getallproducts", (req, res) => { //fetching details from mongodb and sending response as array

    Product.find({} , (err , docs)=>{

              if(!err)
              {
                  return res.send(docs);
              }
              else{
                  return res.status(400).json({ message: 'Something went wrong' });
              }

    })
 
});
router.post("/getproductbyid", (req, res) => {

    Product.find({_id : req.body.productid} , (err , docs)=>{

        if(!err)
        {
            res.send(docs[0])
        }
        else{
            return res.status(400).json({ message: 'something went wrong' });
        }

    })
  
});
router.post("/addreview", async(req, res) => {

    const {review , productid , currentUser} = req.body

    const product = await Product.findById({_id :productid})

    const reviewmodel = {
        name : currentUser.name,
        userid : currentUser._id ,
        rating : review.rating,
        comment : review.comment 
    }
    product.reviews.push(reviewmodel)
    var rating = product.reviews.reduce((acc , x)=> acc + x.rating , 0) / product.reviews.length


    product.rating = rating

    product.save(err=>{
        if(err){
            return res.status(400).json({ message: 'Something went wrong' + err});
        }else{
            res.send('Review Submitted successfully'+err)
            
        }
    })
  
});
module.exports = router