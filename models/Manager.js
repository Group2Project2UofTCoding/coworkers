const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Manager extends Model {
     // setup the method to check the password
    checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}


// If a manager needs to be an employee that means we coud link the manager id with employee ID so we can use the employee information 
Manager.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            // minimum characters
                len: [8]
            }
        },
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'employee',
                key: 'id'
            }
        }
    },
    {   hooks: {
        // Using the hook to hash the password
        async beforeCreate(userData) {
            userData.password = await bcrypt.hash(userData.password, 10);
            return userData;
        },
        // Using the hook to hash the password
        async beforeUpdate(userData) {
            userData.password = await bcrypt.hash(userData.password, 10);
            return userData;
        }
    },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'manager'
    }
);

module.exports = Manager;