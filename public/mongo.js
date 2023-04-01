const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/test")
.then(()=>{
    console.log("connected you mongodb")
})
.catch((e)=>{
    console.log("failed")
})

let schema=new mongoose.Schema({
   name:{
     type:String,
     require:true
       },
    email:{
        type:String,
        require:true
    }
    
})



const collection=mongoose.model("chatappdb",schema)
module.exports=collection
