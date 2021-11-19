
// to transport logs to aws cloud watch

const CloudWatchTransport = require('winston-aws-cloudwatch');


module.exports = new CloudWatchTransport({
      logGroupName: 'Authservice', 
      logStreamName: 'authfirst',
      createLogGroup: true,
      createLogStream: true,
      submissionInterval: 2000,
      submissionRetryCount: 1,
      batchSize: 20,

      formatLog: item =>
        `${item.level}: ${item.message} ${JSON.stringify(item.meta)}`
 });
