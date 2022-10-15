const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
//import routes
const authRoute = require('./routes/auth')

//routes middlewares
app.use('/api/user', authRoute)




app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})

