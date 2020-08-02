const Mail = require('../lib/Mail');

module.exports = {
    async validadeEmail(user) {
        const send = Mail.sendMail({
            from : 'Email test <vitorgabriel1998@hotmail.com',
            to: `${user.name} <${user.email}>`,
            subject:'Confirmação de cadastro',
            html:`Olá, ${user.name}, seja bem vindo`
        })
    }
}