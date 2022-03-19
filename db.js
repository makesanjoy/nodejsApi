const mongoose = require("mongoose"); 
const axios = require('axios');

dbConnect();


async function dbConnect(){
    try {
        await mongoose.connect("mongodb+srv://sanjaysingha:123Machine@cluster0.i99ay.mongodb.net/NodeCrypto?retryWrites=true&w=majority", {useNewUrlParser: true});
        console.log("MongoDb connected succesfully");
    } catch (error) {
        console.log("MongoDb connection failed");
    }
}


module.exports = mongoose
