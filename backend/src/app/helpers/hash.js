const bcrypt = require('bcrypt');

module.exports = {
    async passwordHash(string) {
        const secret = 2;
        const hash = bcrypt.hashSync(string, secret)
        return hash
    }
}