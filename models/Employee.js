const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'department',
                key: 'id'
            }
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'role',
                key: 'id'
            }
        },
        manager_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'manager',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = Employee;