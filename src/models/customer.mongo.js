const mongoose = require('mongoose');
const { randomBytes } = require('crypto');

const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    },
    name: String,
    cart: [{
        quantity: Number,
        product_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Product'
        }
    }],
    resetToken: String,
    resetTokenExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    verified: {
        type: Boolean,
        default: false
    },
    verifyToken: {
        type: String
    }
});

function generateToken() {
    const _p = randomBytes(32);
    return _p.toString('hex');
}

schema.pre('save', function(){
    if(!this.verified && !this.verifyToken) {
        this.verifyToken = generateToken();
    }
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password, 10);
    }
})

schema.methods.checkPassword = async function(_pass) {
    return await bcrypt.compare(_pass, this.password);
}

const Customer = mongoose.model('Customer', schema);

module.exports = Customer;