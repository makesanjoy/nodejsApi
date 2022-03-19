const mongoose = require("mongoose");


const dataSchema =new  mongoose.Schema( {
  
        name: String,
        last:Number,
        buy:Number,
        sell:Number,
        volume:Number,
        base_unit: String

  
});
  const Data = mongoose.model("Data", dataSchema);
  module.exports =Data;