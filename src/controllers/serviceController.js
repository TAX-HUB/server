const asyncHandler = require('express-async-handler')
const Service=require('../models/serviceModel');

 const getServices=asyncHandler(async(req,res,next)=>{
    const services=await Service.find({});
    res.status(201).json({
        data:services})

})

const getOneservice=asyncHandler(async(req,res,next)=>{
    const {id}=req.params;
    const service =  await Service.findById(id);
    if(!service){
        res.status(404).json( {error:`not service for this ${id}`})
      }
    else{
        res.status(201).json({status:"Success",data:service})
    }
})

const createService=asyncHandler(async(req,res,next)=>{
   
    const newService = new Service(req.body);
    
     newService.img=req.file.filename;
    await newService.save()
    res.status(201).json({status:"Success",data:{service:newService}})

})
const updateService=asyncHandler(async(req,res,next)=>{

 let  service=await Service.findById(req.params.id);
    if(!service){
        res.status(404).json( { staus:"fail",error:`not service for this id `})
    }
    else{
    const updatdaservice=await Service.updateOne({_id:req.params.id},{$set:{...req.body}})
      
     res. status(201).json({ status:"success",data:{updatdaservice}})
  
    }
}


)

    const deletService=asyncHandler(async(req,res,next)=>{
      
        let  service=await Service.findById(req.params.id);
        if(!service){
            res.status(404).json( { staus:"fail",error:`not service for this id `})
        }
       else{
        const deletedService=await Service.deleteOne({_id:req.params.id})
    
        res.json({data:{delet:deletedService}})
    }

}



    )
    module.exports={
        getServices,
        getOneservice,
        createService,
        updateService,
        deletService
    }