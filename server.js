const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/sampleDataBase");
const express = require('express')
const app = express()
const port = 3000
const session= require('express-session')
const nocache = require('nocache')
app.set(express.urlencoded({extended:false}))


app.use(nocache())
app.set('view engine','ejs')
app.use(express.static('public'))

app.use(session({
    secret: 'love you',
    resave: false,
    saveUninitialized:false,
    cookie: { 
      secure: false,   
      httpOnly: true 
    }
  }));


  //for user routs

  const userroute= require('./routes/userRoute')

  app.use('/',userroute);

//   app.get('/', (req, res) =>{
//     if(req.session.user)
//        res.render('user/user-home')
//       }else{
//          res.render('user/login',{msg:''})
//       }
//    })

   

// app.get('/', (req, res) => {
//     res.render("user/login")
//     console.log("Ended");
// })

// app.get('/signup',(req,res)=>{
//     res.render('user/signup')
// })

// app.get('/admin',(req,res)=>{
//     res.render('admin/home')
// })
app.listen(port, () => console.log(`app listening on port ${port}!`))