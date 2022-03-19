const express = require("express");
const axios = require('axios');
const ejs = require("ejs");
const db = require("./db.js");
const Data = require("./models/dataModel")



const app = express();

app.set('view engine', 'ejs');


app.use(express.static("public"));



//API CALLING AND SAVING TO DATABASE

axios.get('https://api.wazirx.com/api/v2/tickers')
    
  .then(function ({data}) { //destructuring the response
    // handle success

    var datas = new Data(data.btcinr)
    
        datas.save()
        
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  
app.get("/",(req,res)=>{

  Data.find({}).sort({last: 'descending'}).limit(10).exec(function(err, values) {
    res.render("home", {

      values: values
      });
   });
  });

app.listen(3000,()=>{
    console.log("App is running at port 3000")
})