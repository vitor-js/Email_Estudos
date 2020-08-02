const {Model, DataTypes} = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name:DataTypes.STRING,
            email:DataTypes.STRING,
            phone_number:DataTypes.STRING,
            password:DataTypes.STRING,
            email_validate:DataTypes.INTEGER,
            two_factors_validate:DataTypes.INTEGER
        }, {
            sequelize
        }
        )
    }
}

module.exports = User;