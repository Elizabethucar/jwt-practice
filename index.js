const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000;

dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true },
()=>console.log('Connected to db')
)

//import routes
const authRoute = require('./routes/auth')

//routes middlewares
app.use('/api/user', authRoute)




app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})

