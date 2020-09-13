const express = require('express');
const router = express.Router();
const User = require('../Schems/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authentcateToken, cleanUser }   = require('../middleware/helper');

const secret = process.env.JWT_SECRET

router.get('/user', authentcateToken, async (req, res) => {
    res.status(200).json(cleanUser(req.user));
    
});


router.post('/login', async (req, res) => {
    
    let userName = req.body.userName;
    let password = req.body.password;
    console.log(req.body)
    let user = await User.findOne({
        userName
    });

    if(!user) res.status(403).json({
        error: 'User not found'
    });
    

    bcrypt.compare(password, user.password).then(result => {
        if (result) {
            let token = jwt.sign({id: user.id}, secret, {expiresIn: 3600});
            res.status(200).json({
                message: 'Logged In',
                jwt: token
            });
        } else {
            res.status(403).json({
                error: "Wrong Password"
            });
        }
    });
});




router.post('/register', (req, res) => {
    console.log(req.body)
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    let verifyPass = req.body.verPass;
    let errors = [];
 
    
    if (!userName) errors.push("username");
    if (!email) errors.push("email");
    if (!password) errors.push("password");
    if (!verifyPass) errors.push("verPass");
    if (password !== verifyPass) errors.push("Password and verifPassword don't match");

    if (errors.length !== 0) {
        res.status(422).json(errors);
    } else {
        let newUser =  new User({
            userName,
            email,
            password: bcrypt.hashSync(password, 12)
        });
    
        newUser.save().then(data => {
            let token = jwt.sign({id: newUser.id}, secret);
            res.status(200).json({
                message: "Registered",
                jwt: token
            });
        }).catch(e => {
            res.status(500).json({
                message: 'server error',
                error: e
            });
        }); 

    }

 
});





module.exports = router;
