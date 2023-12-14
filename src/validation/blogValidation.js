const Joi = require("joi");

const blogSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Title is required",
    "string.base": "Title must be a string",
  }),
  description: Joi.string().required().messages({
    "any.required": "Description is required",
    "string.base": "Description must be a string",
  }),
  tags: Joi.string().valid("GENERAL").default("GENERAL").messages({
    "string.base": "Tags must be a string",
    "any.only": "Invalid tag value",
  }),
  categories: Joi.string().valid("GENERAL").default("GENERAL").messages({
    "string.base": "Categories must be a string",
    "any.only": "Invalid category value",
  }),
  image: Joi.string().required().messages({
    "any.required": "Image is required",
    "string.base": "Image must be a string",
  }),
});

module.exports = { blogSchema };
