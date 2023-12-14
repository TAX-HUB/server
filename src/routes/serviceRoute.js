
const router = require("express").Router();
const servicesController = require("../controllers/serviceController");
const { validate } = require("../middlewares/validate");
// const validation= require("../middlewares/validate")
const {serviceSchema}= require("../validation/serviceValidation")

const multer = require("multer")

const diskstorage=multer.diskStorage({
    destination:function(req,file,cb){
        
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        const ext=file.mimetype.split('/')[1];
        const fileName=`service-${Date.now()}.${ext}`;
        console.log(fileName)
        cb(null,fileName)
    }

})
const fileFilter=(req,file,cb)=>{
  
    const imageType=file.mimetype.split('/')[0];
    if(imageType==='image'){
        return cb(null,true)
    }
    else{
        return cb("file must be image",false)
    }
}
const upload=multer({storage:diskstorage,
    fileFilter:fileFilter,
})

router.route("/services").get(servicesController.getServices)
// validate(serviceSchema)
                        .post(validate(serviceSchema),upload.single('img'),servicesController.createService)

 router.route("/services/:id").get(servicesController.getOneservice)
                              .patch(servicesController.updateService)
                              .delete(servicesController.deletService)


     module.exports = router;