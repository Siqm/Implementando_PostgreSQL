const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init (sequelize) {
        super.init ({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        }) 
    }

    static associate (models) {
        this.belongsToMany(models.Role, { foreignKey: 'user_id', through: 'user_roles', as: 'users'})
    }
}

module.exports = User;