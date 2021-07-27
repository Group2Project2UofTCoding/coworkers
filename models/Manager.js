const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Manager extends Model { }

Manager.init(
    {
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'employee',
                key: 'id'
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'employee',
                key: 'password'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'manager'
    }
);

module.exports = Manager;