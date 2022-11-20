const express = require('express')
const {login,register,logout} =require( '../controllers/auth.js')
const r =(req,res)=>{
    res.json({ok:'person'})
    console.log('ok')
}
const router = express.Router()
router.route('/l').get(r)
router.route('/login').post(login)
router.route('/register').post(register)
router.route('/logout').post(logout)

module.exports = router
