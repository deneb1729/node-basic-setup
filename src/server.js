const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ msg: 'Hello world!' })
})

app.listen(3000, (err) => {
  if (err) console.log(err)
  console.log('Listening in port 3000')
})
