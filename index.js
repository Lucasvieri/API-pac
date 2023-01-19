require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose') 
const app = express()




app.use(
    express.urlencoded({
        extended: true,
  }),
)

app.use(express.json())

 const personRoutes = require('./routes/personRoutes')

 app.use('/person', personRoutes)   

app.get('/', (req, res) => {

 
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent (process.env.DB_PASSWORD)


// 

mongoose.set('strictQuery', true)
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.saf1kne.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
  .then(() => {
    console.log("Contectamos ao MondoBD!")
    app.listen(3000)

  })
  .catch((err) => console.log(err))

