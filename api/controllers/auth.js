const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('User');

module.exports.register = (req, res) => {
    const user = new User();
    
    user.name = req.body.name;
    user.email = req.body.email;
    console.log('aaaa', user);
    user.setPassword(req.body.password);    

    user.save(() => {
        const token = user.generateJWT();
        res.status(200);
        res.json({
            token: token
        });
    });
    // console.log(`Registering user: ${req.params.email}`);
    // res.status(200);
    // res.json({
    //     message: `Registered user ${req.params.userId}`
    // });
};

module.exports.login = (req, res) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            res.status(404).json(err);
            return;
        }

        if (user) {
            const token = user.generateJWT();
            res.status(200);
            res.send({
                token: token
            });
        }else {
            res.status(401).json(info);
        }
    })(req, res);
    
    // console.log(`Logging in user: ${req.params.email}`);
    // res.status(200);
    // res.json({
    //     message: `Logged in user ${req.params.userId}`
    // });
}