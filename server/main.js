const express = require('express');
const app = express();
const morgan = require('morgan');

const environment = "development";

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
  res.header("Access-Control-Expose-Headers", "x-auth-token");
  next();
});

const userservicerouter = require('./user-service/user-controller');
const accountservicerouter = require('./account-service/account-controller');
const transactionservicerouter = require('./transaction-service/transaction-controller');
app.use('/bankingapp/api/user', userservicerouter);
app.use('/bankingapp/api/account', accountservicerouter);
app.use('/bankingapp/api/transaction', transactionservicerouter);

if (environment === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan is enabled...');
}

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Application running in ${environment} environment, listening to port ${port}....`);
});