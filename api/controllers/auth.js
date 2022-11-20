import {db} from '../connect.js'

export const register = (req,res)=>{
    console.log('')

    //check user if exist
    const q = 'select from users where username=?'

    db.query(q,[req.body.username],(err,data)=>{
        if(err) return res.status(500).json(err)
        if(data.length)return res.status(400).json('user already exists!')
        //create a new user
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.pasword,salt)
        
        const q = "insert into users (`username`,`email`,`password`,`name`) VALUE (?)"

        const values = [req.body.username,req.body.email,hashedPassword,req.body.name]

        db.query(q,[values],(err,data)=>{
            if(err)return res.status(500).json(err)
            return res.status(200).json('user has been created.')
        })

    })

}

export const login = (req,res)=>{

}
export const logout = (req,res)=>{

}
