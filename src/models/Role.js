const { Model, DataTypes } = require('sequelize');

class Role extends Model {
    static init (sequelize) {
        super.init ({
            name: DataTypes.STRING,
            extensionNumber: DataTypes.INTEGER,
        }, {
            sequelize,
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'role_id', through: 'user_roles', as: 'roles'})
    }
}

module.exports = Role;