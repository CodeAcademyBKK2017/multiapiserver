const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
const users = require('./assets/login.json');
const prepaid = require('./assets/prepaid.json');
const postpaid = require('./assets/postpaid.json');
const userData = require('./assets/userData.json');

app.post('/login', (req, res) => {
  const user = req.body.user;
  console.log(req.body);
  if(users[user]){
    return res.status(200).json(users[user])
  }
  return res.status(404).json({'err':'user not found'});
});

app.get('/prepaid', (req, res) => {
  const secret = req.headers.secret;

  const prepaidData = prepaid[secret];
  if(prepaidData){
    return res.status(200).json(prepaidData)
  }
  return res.status(401).json({'err':'user not authenticated'});
});

app.post('/postpaid', (req, res) => {
  const secret = req.body.secret;

  const postpaidData = postpaid[secret];
  if(postpaidData){
    return res.status(200).json(postpaidData)
  }
  return res.status(401).json({'err':'user not authenticated'});
});

app.post('/user', (req, res) => {
  const secret = req.headers.secret;

  const userD = userData[secret];
  if(userD){
    return res.status(200).json(userD)
  }
  return res.status(401).json({'err':'user not authenticated with postpaidprepaid key'});
});

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));
