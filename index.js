const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function(){
  console.log('server is listening');
});

app.get('/tip_calculator', function(req, res){
  res.render('tip_calculator');
})

app.post('/tip_calculator', function(req, res){
  const amount = req.body.amount;
  const tipPercent = req.body.tipPercent;
  const tip = amount*1 * tipPercent*1;
  res.render('tip_calculator', {amount, tipPercent, tip})
})
