const express = require('express'); //express
const cors = require('cors'); //cors
const mongoose = require('mongoose'); //mongoose
const User = require('./models/User'); //User model
const Post = require('./models/Post'); //Post model
const bcrypt = require('bcryptjs'); //password hashing
const app = express(); //express app
const jwt = require('jsonwebtoken'); //token generation
const cookieParser = require('cookie-parser'); //cookie parser
const multer = require('multer'); //file upload
const uploadMiddleware = multer({dest:'uploads/'}) //file upload middleware
const fs = require('fs'); //file system

const secret = 'aoisduoasifasoidfnaosi';
const salt = bcrypt.genSaltSync(10);

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser());


mongoose.connect('mongodb+srv://blog:bXwPqvc35t2wwqG7@cluster0.zg4vgxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// gets the input from the form and saves it to the database
// also hashes the password
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

//checks if the user is already registered
//if not, it errors out
//if the user is registered, it checks if the password is correct 
//if the password is correct, it generates a token and sends it to the client
//if the password is incorrect, it errors out
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne ({username})
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
      if(err) throw err;
      res.cookie('token', token).json({
        id: userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json('Wrong credentials');
  }
});

//checks if the user is logged in
//if the user is logged in, it sends the user info to the client
app.get('/profile', (req,res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err,info) => {
    if (err) throw err;
    res.json(info);
  });
});

//logs the user out by clearing the cookie
app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok');
});

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
  const {originalname, path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path+'.'+ext;
  fs.renameSync(path, newPath);

  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err, info)=>{
    if(err) throw err;
    const {title, summary, content} = req.body;
    const postDoc = await Post.create({
      title, 
      summary,
      content,
      cover: newPath,
      author: info.id,
    });
    res.json(postDoc);
  })
}); 

app.get('/post', async (req, res) => {
  res.json(await Post.find ());
})

app.listen(4000);