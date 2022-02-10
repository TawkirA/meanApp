const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.getProfile = (req, res) => {

    if (!req.payload._id) {
        res.status(401).json({ message: 'UnauthorizedError: private profile' });
    } else {
        User.findById(req.payload._id).exec((err, user) => {
            res.status(200).json(user);
        })
    }
    // console.log(`Reading Profile ID: ${req.params.userId}`);
    // res.status(200);
    // res.json({
    //     message: `Profile read ${req.params.userId}`
    // });
};