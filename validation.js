const Joi = require('@hapi/joi')


//register validation
const registerValitadion = (data)=>{

const schema = {
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required(),
  password: Joi.string().min(6).required()
}
return Joi.ValidationError(data, schema)
}

//login validation
const loginValitadion = (data)=>{

  const schema = {
    email: Joi.string().min(6).required(),
    password: Joi.string().min(6).required()
  }
  return Joi.ValidationError(data, schema)
  }

module .exports.registerValitadion = registerValitadion
module .exports.loginValitadion = loginValitadion