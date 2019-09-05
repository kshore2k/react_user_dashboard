const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models');

module.exports = {
    home: (req,res) => {
        res.send('Welcome!');
    },
    secret: (req,res) => {
        res.send('The password is potato');
    },
    create: (req,res) => {
        const { email, password } = req.body;

        bcrypt.hash(password, 10)
            .then(hashedPassword => {
                User.create({ email, password: hashedPassword })
                    .then((data)=>res.send("Welcome to the club!"))
                    .catch((err)=>res.send("Error registering new user please try again."))
            })
            .catch((err)=>res.send(err))
    },
    auth: (req,res) => {
        // Keep hidden in extrnal variable do not push to git
        const secret = 'mysecret';
        
        const { email, password } = req.body;

        User.findOne({ email })
            .then(user => {
                if(!user){
                    console.log("Incorrect email or password");
                } else {
                    bcrypt.compare(password, user.password)
                        .then(result => {
                            if(!result){
                                console.log("Invalid Password");
                            } else {
                               // Issue token
                                const payload = { email };
                                const token = jwt.sign(payload, secret, {
                                    expiresIn: '1h'
                                });
                                res.cookie('token', token, { httpOnly: true })
                                    .sendStatus(200); 
                            }
                        })
                }
            })
            .catch(err => {
                console.log("Error finding user", err);
            })
    },
    checkToken: (req,res) => {
        res.sendStatus(200);
    },
    allUsers: (req,res) => {
        User.find({})
            .then((data)=>res.json(data))
            .catch((err)=>res.json(err))
    },
    logout: (req,res) => {
        res.clearCookie('token');
        res.send('Logged Out');
    }
};