
const express = require('express');


const port = 3000;

const app = express();


// importing logger
const logger = require('./logger/logger');

// intialize morgan logging middleware
require('./logger/morganLogger')(app);

// demo req
app.get('',async(req,res)=>{
    res.send('hello');
});

// 404 route
app.use('*',(req,res,next)=>{

  // error log
  logger.error({
        message:`Failed to find requested page`,
        Function:"",
        File:"index.js",
        Purpose:"404 page error",
  });

});

//  server setup
app.listen(port,()=>{
    
    // information log 
    logger.info({
      message:`Server is listening on port : ${port}`,
      Function:"listen()",
      File:"index.js",
      Purpose: "To check server is started  or not",
    });
    console.log('server running');

});

// start server
listen();