const express= require('express')
const app = express()
const PORT = process.env.PORT || 8080


app.get('/healthcheck', (req, res) => {
  res.send('We are up and running')
})

app.get('/healthcheck1', (req, res) => {
  res.send('healthcheck1 is this api endpoint')
})

app.get('*', (req,res) => {
  res.send('API request not found, ever')
})


app.listen(PORT, () =>{
  console.log('Server started on port ' + PORT)
})


