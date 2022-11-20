const mysql = require('mysql')

const db = mysql.createConnection({
    host:'192.168.234.150',
    user: 'root',
    password: '123456',
    database:'social'
})
module.exports={db}
