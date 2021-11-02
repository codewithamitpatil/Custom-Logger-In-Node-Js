// for development
const development = {

  // for env
  isProduction:false,

  env:'development',
  port: process.env.PORT || 3000,

  // for logger
  logLevel:'silly',
  logPath : './logs/', 

  // for mongodb
  mongodb: 'mongodb://localhost:27017/Social_Auth',
  mongodbOptions: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    promiseLibrary: global.Promise
  },
  // for winston mongodb logs
  mongodbLogOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },


  // for elasticsearch
  elasticHost:"",

   // for logger
  loggerConfig:{
    logLevel:process.env.logLevel || "silly",
    logPath:process.env.logPath||"./logs/",
    service:process.env.service || "AuthService"
  },

};

// for production
const production = {

  // for env
  isProduction:true,
  logLevel:'silly',
  logPath : './logs/',
  port: process.env.PORT || 3001,
  mongodb: '',
  mongodbOptions: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  // for winston mongodb logs
  mongodbLogOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  // for elasticsearch
  elasticHost:"",
 // for logger
  loggerConfig:{
    logLevel:process.env.logLevel || "silly",
    logPath:process.env.logPath||"./logs/",
    service:process.env.service || "AuthService"
  },


};


const isProduction =false;

if (isProduction){
   console.log('Production Env');
}else{
   console.log('Development Env');
}

//loadtest -c 100 --rps 1000  https://apibuckets.herokuapp.com/1
//heroku logs -t --app apibuckets

// module exports
module.exports = isProduction
  ? { ...production  }
  : { ...development };



  
