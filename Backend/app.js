const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const userModel = require('./Model/user');
const cors = require('cors');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/register', async function (req, res) {
    let { name, username, email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) return res.send('User Existed');

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            let users = await userModel.create({
                name,
                username,
                email,
                password: hash
            });

            let token = jwt.sign({ email: email, userid: users._id }, 'shhhh');
            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: 'None'
            });
            res.send(token);
        })
    })

});


app.post('/login', async function (req, res) {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) return res.status(500).send('Something Went Wrong!!');

    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            let token = jwt.sign({ email: email, userId: user._id }, 'shhhh');
            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: 'None'
            });
            res.send(token);
        }
        else {
            console.log("Passowrd not Match")
            // res.redirect('/login');
        }
    });
});
function isLoggedIn(req, res, next) {
    if (req.cookies.token === '') res.redirect('/login');
    else {
        let data = jwt.verify(req.cookies.token, 'shhhh');
        req.user = data;
    }
    // console.log(req.cookies);

    next();
}

app.get('/profile', async function (req, res) {
    console.log(req.cookies);
    let { email, name } = req.body;
    let user = await userModel.findOne({ email: email });
    console.log(user);
    res.send(user);
})


app.get("", (req, res) => {
    res.send("Server Started")
})

app.listen(3000, function () {
    console.log('Its Running');
});

