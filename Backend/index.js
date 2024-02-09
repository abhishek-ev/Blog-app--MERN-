const express=require('express')
const app=express()
const mongoose =require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const multer=require('multer')
const cookieParser=require('cookie-parser')
const authRoute=require('./Routes/auth')
const userRoute=require('./Routes/user')
const postRoute=require('./Routes/post')
const CommentRoute=require('./Routes/comment')
const path=require('path')


// database connet
const connetDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("data base connected succesfully")
    }
    catch(err){
        console.log(err)
    }
}

//middlewares
dotenv.config()
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(cookieParser());
app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)
app.use('/api/comments',CommentRoute)

// image upload
const storage=multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images") //images folder
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)
        // fn(null,"image1.png")
    }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    // console.log(req.body)
    res.status(200).json("Image has been uploaded successfully!")
})

app.listen(process.env.PORT,()=>{
    connetDB()
    console.log("app is on port"+process.env.PORT)
})