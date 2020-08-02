const Mail = require('../lib/Mail');

module.exports = {
    async validadeEmail(user) {
        const send = Mail.sendMail({
            from : 'Email test <vitorgabriel1998@hotmail.com',
            to: `${user.name} <${user.email}>`,
            subject:'Confirmação de cadastro',
            html:`<html>
                    <head>
                        </head>
                            <body>
                                <div style="width: Calc(100% - 40px); padding: 20px; background: #F9F9F9;">
                                    <div style="width: Calc(100% - 40px);color: #454545;padding: 20px;text-align: center;">
                                        <div style="text-align: center;">
                                            <hr style="background: #353535;width: 25%;min-width: 50px;max-width: 150px;border: initial;margin: 0 30px;height: 1px;display: inline-block;vertical-align: super;">
                                            <h1 style="display: inline-block; font-family: Verdana, Gadget, sans-serif; border-radius: 5px; font-size: 30px; color: #353535; text-align: center;font-weight: normal;">
                                            Grupo de teste :D
                                            </h1>
                                            <hr style="background: #353535;width: 25%;min-width: 50px;max-width: 150px;border: initial;margin: 0 30px;height: 1px;display: inline-block;vertical-align: super;">
                                        </div>
                                            <p>Olá ${user.name}, tudo bom?</p>
                                            <p>Somos do grupo de teste e para uma melhor experiencia precisamos que confirme seu email :D</p>
                                            <p style="margin: 30px; text-align: center;">
                                                <a> 
                                                    <button style="padding: 10px 25px;border: initial; border-radius: 2px; background: #454545; color: #F9F9F9; cursor: pointer;box-shadow: 0 0 5px 2px rgba(0,0,0,.1);">
                                                    Clique para confirmar
                                                    </button>
                                                </a>
                                            </p>
                                    </div>
                                </div>
                            </body>
                    </html>`
        })
    }
}