const express = require('express')
var cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser()); 

app.get('/', (req, res) => res.send(`Request protocol ${req.protocol}`))

app.get('/user', (req, res) => {
 var name = req.query.name
 var city = req.query.city
 
 if(req.query.user){
  var height = req.query.user.height
  var color = req.query.user.color
 }
 
 var receivedData = `
  name : ${name} <br />
  city : ${city} <br />
  height : ${height} <br />
  color : ${color} <br />
 `
 
 res.send(receivedData)
})


const port = 3000
app.listen(port, () => console.log(`Application started listening on port ${port}!`));      