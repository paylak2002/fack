let express = require('express')
let app = express()
let server = require('http').Server(app)
let session = require('express-session')
let ms = require('mysql')
let con = ms.createConnection({
  host:'localhost',
  user:'user',
  password:'paylak1990',
  database:'mysite'
})
let bodyParser = require('body-parser')

con.connect((err)=>{err ? console.log(err) : console.log('connected!!!')})

app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
}))
app.use(bodyParser())
app.set('view engine','ejs')

app.get('/',(req,res)=>{
  if(req.session.user){
    res.render('index')
  }else{
    res.render('login')
  }
})
//////////////////
app.get('/regist',(req,res)=>{
  req.session.user ? res.redirect('/') : res.render('regist')
})
app.post('/regist',(req,res)=>{
  let sqlI = "INSERT INTO us(name,usname, pass) VALUES ('user',?,?)"
  let sqlS = "SELECT * FROM us WHERE usname=?"
  if(req.body.user && req.body.pass && req.body.pass == req.body.passre){
    con.query(sqlS,[req.body.user],(err,value)=>{
      if(value.length==0){
        con.query(sqlI,[req.body.user,req.body.pass],(err)=>{
          if(err){
            console.log(err)
          }else if(req.session.user){
            req.session.destroy((err)=>{
              if(err){
                console.log(err)
              }else{
                req.session.user = true
                res.redirect('/')
              }
            })
          }else{
              req.session.user = true
              res.redirect('/')
          }
        })
      }else{
        res.render('regist',{err:'error'})
      }
    })
  }else{
    res.render('regist',{err:'error'})
  }
})
///////////////////
app.post('/',(req,res)=>{
  let sql = 'SELECT * FROM us WHERE usname=?'
  con.query(sql,[req.body.user],(err,value)=>{
    if(value.length > 0){
      if(req.body.pass == value[0].pass){
        req.session.user = true
      }
      res.redirect('/')
    }else{
      res.redirect('/')
    }
  })
})
app.post('/logout',(req,res)=>{
  req.session.destroy()
  res.send(true)
})

server.listen(3000,()=>{
  console.log('start')
})
