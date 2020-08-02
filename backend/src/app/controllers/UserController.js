const send = require('../helpers/sendEmails');
const jwt = require("jsonwebtoken");
const {promisify} = require('util');

const Result = require('../helpers/handleError');
const result = new Result();

const User = require('../models/User');

module.exports = {
    async createUser(req, res) {
         const { name, email, phone_number, password } = req.body;

         const user = {
             name,
             email, 
             phone_number,
             password
         };
         const userExist = await User.findOne({ where: { email: user.email } });
         if(userExist) {
            return res.json(result.jsonBadRequest('User already exist'))
         }

         try {
             const newUser = await User.create(user);
             await send.validadeEmail(newUser)
             return res.json(result.jsonOk(newUser))
         }catch {
            return result.jsonServerError();
         }
    },
    async checkEmail(req, res) {
        const {token} = req.params;
        const decoded = await promisify(jwt.verify)(token,process.env.VERIFICATION_CODE_PATH )
        const user_id = decoded.user_id
        try{
            const userValidadeEmail = await User.update({email_validated:true}, {where:user_id})
            return res.json(result.jsonOk(userValidadeEmail))
        }catch {
            return res.json(result.jsonBadRequest('Algo deu errado ao validar o seu email, tente novamente'))
        }
    }
}