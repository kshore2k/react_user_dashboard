const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/user_dashboard', { useNewUrlParser: true });

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

UserSchema.methods.isCorrectPassword = (password, callback) => {
    bcrypt.compare(password, this.password, (err, same) => {
        if(err){
            callback(err);
        } else {
            callback(err, same);
        }
    });
};

module.exports = mongoose.model('User', UserSchema);