const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config()


// console.log(app.get('env'));
// set env
const environment = process.env.NODE_ENV || "development";
console.log({ environment });

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

const bodyParser = require('body-parser');

// some basic header for auth
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
  res.header("Access-Control-Expose-Headers", "x-auth-token");
  next();
});

// -----------------> Routes <-----------------------------------//

const userservicerouter = require('./controllers/user-controller');
const accountservicerouter = require('./controllers/account-controller');
const transactionservicerouter = require('./controllers/transaction-controller');

// -----------------> Routes Setup <---------------------------------//
app.use('/api/user', userservicerouter);
app.use('/api/account', accountservicerouter);
app.use('/api/transaction', transactionservicerouter);


app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));


// --------------------------> Checking for Deployment purposes <----------------------- // 
app.get('/', (req, res) => {
  res.send('App is running');
});


if (environment === 'development') {
  app.use(morgan('tiny'));
  // ------------------------> Logger (Morgan) <---------------------------- //
  console.log('Morgan is enabled...');
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Application running in ${environment} environment, listening to port ${port}....`);
});