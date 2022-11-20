import express from 'express'

const app = express()

import userRouter from './routes/users.js'
import commentsRouter from './routes/users.js'
import likesRouter from './routes/users.js'
import postsRouter from './routes/users.js'
import authRouter from './routes/users.js'
app.use(express.json())
app.use('/user',userRouter)
app.use('/likes',likesRouter)
app.use('/comments',commentsRouter)
app.use('/posts',postsRouter)
app.use('/auth',authRouter)
app.use('/kk',(req,res)=>{
    res.json({k:'ll'})
})
app.listen(8800,()=>{
    console.log('listing to 8800')
})