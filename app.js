const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

let chaindata = []

chaindata[0] = {
  pre:{
    state_root: "9cf1e2ce",
    ee_state: [0, 1, 2, 3, 4]
  },
  post:{
    state_root: "2a8f5df4",
    ee_state: [2, 1, 2, 1, 4]
  },
  transaction:{
    transaction: [3, 0, 2]
  }
}
// getLatestBlock
app.get('/getLatestBlock', cors(), (req, res) => {
  //res.send('latestblock')
  res.status(200).json(chaindata[chaindata.length-1])
})

// updateLatestBlock
app.get('/updateLatestBlock', cors(), (req, res) => {
  chaindata[chaindata.length] = req
  res.status(200).json({status: "ok"})
})

// app.get('/getStateByRoot', (req, res) => {
//   chaindata.find((item) => item.)
//   res.send('Hello World!')
// })

app.listen(port, () => console.log(`SimplEE-sp listening on port ${port}!`))
