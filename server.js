const express = require("express");
const app = express()
const bodyParser = require("body-parser");
var dbconnection = require('./db') //establishing connection with mongodb

var userRoute = require('./routes/userRoute')
const productsRoute = require('./routes/productsRoute')
app.use(bodyParser.json());
const path = require('path');
app.use('/api/products/' , productsRoute)
app.use('/api/users/',userRoute)

if(process.env.NODE_ENV === 'production')
    {
        app.use('/' , express.static('client/build'))

        app.get('*' , (req,res)=>{

            res.sendFile(path.resolve(__dirname , 'client/build/index.html'))

        })

    }

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Node JS Server Started`));