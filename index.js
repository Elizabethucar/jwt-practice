const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

//connect to db
mongoose.connect('mongodb+srv://Liz:Edessa07@jwt-practice.w2ttirl.mongodb.net/?retryWrites=true&w=majority')

//import routes
const authRoute = require('./routes/auth')

//routes middlewares
app.use('/api/user', authRoute)




app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})

