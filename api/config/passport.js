const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local');
const User = mongoose.model('User');

passport.use(
    new localStrategy(
        {
            usernameField: 'email'
        },
        function(username, password, done) {
            User.findOne({ email: username }, function(err, user) {
                if (err) {
                    return done(err);
                }

                if (!user) {
                    return done(null, false, {
                        message: 'User not found'
                    })
                }

                if (!user.validPassword(password)) {
                    return done(null, false, {
                        message: 'Password is wrong'
                    })
                }

                return done(null, user);
            });
        }
    )
)
