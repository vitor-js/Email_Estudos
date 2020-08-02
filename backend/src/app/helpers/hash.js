const bcrypt = require('bcrypt');

module.exports = class Hash {

    async passwordHash(string) {
        const secret = 2;
        const hash = bcrypt.hashSync(string, secret)
        return hash
    }

}