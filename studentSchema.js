const mongoose=require("mongoose")
const StudentSchema={
    name:{
        type:String
    },
    classId:{
        type:Number
    }
    
}
const Student=new mongoose.model("students",StudentSchema)
module.exports=Student