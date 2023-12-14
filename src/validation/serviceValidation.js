const Joi = require('joi')
// const Service=require("../models/serviceModel");
const validate=require("../middlewares/validate")

const serviceSchema=Joi.object({
title:Joi.string().required(),

description:Joi.string().required(),


img:Joi.string().required(),

serial_code:Joi.string(),

ststus:Joi.string(),
createdAt:Joi.date(),
  updateAt:Joi.date(),


}

)
module.exports={serviceSchema};