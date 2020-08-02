const send = require('../helpers/sendEmails');

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
             await send.validadeEmail(user)
             return res.json(result.jsonOk(user))
         }catch {
            return result.jsonServerError();
         }

    }
}