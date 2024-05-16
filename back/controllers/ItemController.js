const Mattress = require("../models/mattress");
const lodash = require("lodash");



const getReq = (model)=>{
    return async(req,res)=>{
    const {type,color,width,height} = req.query;
    const query = {};
    if(type){query.type= lodash.lowerCase(type)};
    if(width){ query.width = width};
    if(height){query.height= height};
    if(color){query.color= lodash.lowerCase(color)};
    try{
        const mattresses = await model.find(query);
       return res.status(200).json(mattresses);
    }catch(err){
        console.log(err);
        res.status(400).json({error: err.message});
    }
    }

};

const postReq = (model)=>{
    return async(req,res)=>{
    const {type,color,width,height} = req.body;
    const createdItem = {};
    if(type){createdItem.type = lodash.lowerCase(type)};
    if(width){createdItem.width = width};
    if(height){createdItem.height = height};
    if(color){createdItem.color= lodash.lowerCase(color)};
    try{
        const matt = new model(createdItem);
        await matt.save();
        return res.status(200).json(matt);
    }catch(err){
        console.log(err);
        return res.status(400).json({error:err.message});
    }
};
} 


const patchReq = (model)=>{
    return async(req,res)=>{
    const {_id, type, width,height,color} = req.body;
    if(!_id){
        throw Error("Enter The Item Id");
    }
    const queryUpdate = {};
    if(type){queryUpdate.type = lodash.lowerCase(type);};
    if(width){queryUpdate.width = width};
    if(height){queryUpdate.height = height};
    if(color){queryUpdate.color = lodash.lowerCase(color)};
    try{
        const updatedItem = await model.findByIdAndUpdate(
            _id,
            queryUpdate,
            {new: true}
        );
        if(!updatedItem){
            return res.status(404).json({error:"Item Not Found"})
        }
        res.status(200).json(updatedItem);
    }catch(err){
        console.log("Error Updating Item",err);
        res.status(400).json({error:err.message});
    }
};}

const deleteReq =   (model)=>{
    return async(req,res)=>{
    const {_id} = req.body;
    try{
        const deletedItem = await Mattress.findByIdAndDelete(_id);
        return res.status(200).json(deletedItem);
    }catch(err){
        console.log(err);
        return res.status(400).json({error:err.message});
    }
};}

module.exports = {getReq,postReq,patchReq,deleteReq};