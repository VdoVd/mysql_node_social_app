const express =require('express')
const app = express()


const userRouter =require( './routes/users.js')
const authRouter =require( './routes/auth.js')

app.use(express.json())
// app.use('/user',userRouter)
// app.use('/likes',likesRouter)
// app.use('/comments',commentsRouter)
// app.use('/posts',postsRouter)
app.use('/auth',authRouter)
app.use('/kk',(req,res)=>{
    res.json({k:'lfl'})
})
app.listen(8800,()=>{
    console.log('listing to 8800')
})
