const joi = require('joi')
const userValidation = {
    createUser :(data) =>{
const schema = joi.object({
    username:joi.string().required(),
    email:joi.string().email().required(),
    password:joi.string().required(),
   profileImage :joi.string().required(),

})
return schema.validate(data)
    },
    updateUser :(data) =>{
        const schema = joi.object({
            username:joi.string().required(),
            email:joi.string().email().required(),
            password:joi.string().required(),
           profileImage :joi.string().required(),
        
        })
        return schema.validate(data)
            },
            deleteUser :(data) =>{
                const schema = joi.object({
                    username:joi.string().required(),
                    email:joi.string().email().required(),
                    password:joi.string().required(),
                   profileImage :joi.string().required(),
                
                })
                return schema.validate(data)
                    },
                
        
        


}
module.exports = userValidation;