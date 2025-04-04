const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const userModel = require('./Model/user');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

app.get('/', function(req,res){
    res.render('home');
});

app.post('/register', async function(req,res){
    let{name, username, email, password} = req.body;
    let user = await userModel.findOne({email});
    if(user) return res.send('User Already Register');

    bcrypt.genSalt(10, function(err,salt){
        bcrypt.hash(password, salt, async function(err, hash){
            let users =await userModel.create({
                name,
                username,
                email,
                password: hash
            });

            let token = jwt.sign({email: email, userid: users._id} , 'shhhh');
            // res.cookie('token', token);
            res.send( token);
        })
    })

});

app.get('/login', function(req,res){
    res.render('login');
})

app.post('/login',async function(req, res){
    let{email, password} = req.body;
    let user = await userModel.findOne({email});
    if(!user) return res.send('Something Went Wrong!!');

    bcrypt.compare(password, user.password , function(err, result){
        if(result){
            let token = jwt.sign({email: email, userId: user._id}, 'shhhh');
            // res.cookie('token', token);
            res.send(token);
        }
        else{
            res.redirect('/login');
        }
    });
});

app.get('/profile', async function(req,res){
    let { email, password} = req.body;
    let user =await userModel.findOne({email, password});
    res.send(user);
})

app.listen(3000, function(){
    console.log('Its Running');
});