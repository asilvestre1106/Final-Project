const express = require('express'); //express
const cors = require('cors'); //cors
const mongoose = require('mongoose'); //mongoose
const User = require('./models/User'); //User model
const bcrypt = require('bcryptjs'); //password hashing
const app = express(); //express app
const jwt = require('jsonwebtoken'); //token generation
const cookieParser = require('cookie-parser'); //cookie parser

const secret = 'aoisduoasifasoidfnaosi';
const salt = bcrypt.genSaltSync(10);

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser());


mongoose.connect('mongodb+srv://blog:bXwPqvc35t2wwqG7@cluster0.zg4vgxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try{
    const UserDoc = await User.create({ 
      username, 
      password:bcrypt.hashSync(password, salt) 
    })
    res.json(UserDoc); 
  } catch(e) {
    res.status(400).json(e);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne ({username})
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
      if(err) throw err;
      res.cookie('token', token).json('ok');
    });
  } else {
    res.status(400).json('Wrong credentials');
  }
});

app.get('/profile', (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err, info)=>{
    if(err) throw err;
    res.json(info);
  })
  res.json(req.cookies);
});


app.listen(4000);