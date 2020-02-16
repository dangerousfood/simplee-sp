const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000;
const cors = require('cors');

let chaindata = [];

function printChain() {
  for (let i=0; i<chaindata.length; i++) {
    console.log("Block", i);
    console.log(chaindata[i]);
  }
}

app.get('/getLatestBlock', cors(), (req, res) => {
  console.log("*********************")
  console.log("Sending Latest Block");
  console.log(JSON.stringify(chaindata[chaindata.length-1]));
  res.status(200).json(chaindata[chaindata.length-1]);
});

app.post('/updateLatestBlock', cors(), (req, res) => {

  console.log("------------------------------------------------------------");

  console.log("Current chain:");
  printChain();
  console.log("");
  console.log("Posted block");
  console.log(req.body);
  console.log("");

  if(chaindata.length>=1 && req.body['pre']['state_root']!=chaindata[chaindata.length-1]['post']['state_root']) {
    console.log("--- Bad block!! ---");
  }
  else {
    chaindata[chaindata.length] = req.body;
    console.log("New chain:");
    printChain();
    console.log("");
  }
  res.status(200).json(JSON.stringify(chaindata));
});


app.listen(port, () => console.log(`SimplEE-sp listening on port ${port}!`));
