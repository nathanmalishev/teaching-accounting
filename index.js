const express= require('express')
const app = express()
const PORT = process.env.PORT || 8080


app.get('/healthcheck', (req, res) => {
  res.send('Health check 1 is fucking awesome')
})

app.get('/healthcheck2', (req, res) => {
  res.send('healthcheck2 izzzzs this api endpoint')
})

app.get('*', (req,res) => {
  res.send('API request not found, ever xxx')
})


app.listen(PORT, () =>{
  console.log('Server started on port ' + PORT)
})


