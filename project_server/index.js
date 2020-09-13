require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const mongoUrl = process.env.MONGO_URL;
const port = process.env.SERVER_PORT;



mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => 
  console.log("Connection to Database established successfuly")
).catch(err=> console.log(err));


const server = express();



server.use(cors());

server.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});


server.use(bodyParser.urlencoded({limit: '150mb', extended: true }));
server.use(bodyParser.json({limit: '150mb'}));


server.use(router);



server.listen(port, () => {
    process.stdout.write("\033c");
    console.log(`server is running at port ${port}`);
  });
  
