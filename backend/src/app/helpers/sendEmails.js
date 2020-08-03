const Mail = require('../lib/Mail');
const Template = require('../helpers/templates/TemplatesEmail')
const jwt = require('jsonwebtoken');

module.exports = {
    async validadeEmail(user) {

        const {id,name} = user;
        const token = await jwt.sign({id},process.env.CONFIT_SECRET_USER, {
          expiresIn:'1d'
        });
        const data = {
            token,
            name
        }
        
        const htmlMail = Template.mailValdiadeTemplate(data)

        const send = Mail.sendMail({
            from : 'Email test <vitorgabriel1998@hotmail.com',
            to: `${user.name} <${user.email}>`,
            subject:'Confirmação de cadastro',
            html:htmlMail
        })
    },

    async forgotPasswordEmail(user) {
        const {id,name} = user;
        const token = await jwt.sign({id},process.env.CONFIT_SECRET_USER, {
          expiresIn:'1d'
        });
        const data = {
            token,
            name
        }
        
        const htmlMail = Template.mailForgotPassword(data)

        const send = Mail.sendMail({
            from : 'Email test <vitorgabriel1998@hotmail.com',
            to: `${user.name} <${user.email}>`,
            subject:'Alterar senha',
            html:htmlMail
        })
    }
}