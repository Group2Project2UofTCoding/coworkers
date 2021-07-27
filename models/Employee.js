const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Employee extends Model { }

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [5]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        address_1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address_2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postal_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sin: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'role',
                key: 'role_name'
            }
        },
        level: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'role',
                key: 'level'
            }
        },
        department_id: {
            type: DataTypes.STRING,
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
        },
        date_of_hire: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        photo_url: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee'
    }
);

module.exports = Employee;