const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/class-API",{
    useNewUrlParser:true
}).then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err)
})

const classSchema={
    class:{
        type:String
    },
    studentsCount:{
        type:Number
    }
}


const Class=new mongoose.model("class",classSchema)


module.exports=Class
