const express=require("express")
const Class=require("./classSchema")
const Student=require("./studentSchema")

const app=express()
app.use(express.json())


// Create a new Class
app.post("/v1/myClass",async(req,res)=>{
    try{
        const NewClass=new Class(req.body)
        const createClass=await NewClass.save()
        res.status(201).send({id:createClass._id})
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
})

// List out all classes
app.get("/v1/myClass",async(req,res)=>{
    try{
        const  classes=await Class.find()
        res.status(200).send({classes})
    }catch(err){
        console.log(err)
        res.status(404).send(err)
    }
})


// Get a specific class by id
app.get("/v1/myClass/:myClassId",async(req,res)=>{
    try{
        const  _id=req.params.myClassId
        const findClassById=await Class.findById(_id)
        if(findClassById){
            res.status(200).send(findClassById)
        }else{
            res.status(404).send({ error: "There is no class at that id"})
        }
    }catch(err){
        console.log(err)
        // res.status(404).send({ error: "There is no class at that id"})
    }
})
// Delete a specified class 
app.delete("/v1/myClass/:myClassId", async(req,res)=>{
    try{
        const _id=req.params.myClassId
        const DeleteById= await Class.findByIdAndDelete(_id)
        if(!DeleteById){
            return res.status(404).send({error: "There is no task at that id"})
        }else{
            res.status( 204).send("None")
        }
       
    }catch(err){
        console.log(err)
    }
})


// Register a new student to class
app.post("/v1/myClass/:myClassId/students",async(req,res)=>{
    try{
        const id=req.params.myClassId
        console.log(id)

        const findClassById1=await Class.findById(id)
        const newStudent=new Student(req.body)
        console.log(newStudent)
        const createStudent=await newStudent.save()
        res.status(201).send({studentId: createStudent._id})

    }catch(err){
        res.status(404).send(err)
    }
   
})
app.listen(3000,()=>{
    console.log(`server is running at port 3000`)
})