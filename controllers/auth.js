const { request } = require('../app')
const User = require('../models/User.js')


module.exports.login = function (req, res){

}


module.exports.register = async function(req,  res){

    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        res.status(409).json({
            message: 'Такой email уже занят, попробуйте другой!'
        })
    } else {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        })
        try{
            await user.save()
            res.status(201).json(user)
        } catch (e){

        }

    }
}
