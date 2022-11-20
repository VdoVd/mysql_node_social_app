import express from "express";
import {} from '../controllers/users.js'
const router = express.Router()

router.get('/test',(req,res)=>{
    res.send('test ok')
})
export default router