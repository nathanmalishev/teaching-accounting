const express= require('express')
const app = express()
const PORT = process.env.PORT || 3000


app.get('/healthcheck', (req, res) => {
  res.send('We are up and running')
})


app.get('*', (req,res) => {
  res.send('API request not found')
})


app.listen(PORT, () =>{
  console.log('Server started on port ' + PORT)
})


