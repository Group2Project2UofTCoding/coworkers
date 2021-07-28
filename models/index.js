
const Employee = require('./Employee');
const Department = require('./Department');
const Role = require('./Role');
const Manager = require('./Manager');

// Create associations
Employee.belongsTo(Manager, {
    foreignKey: 'manager_id'
});

Manager.hasMany(Employee, {
    foreignKey: 'manager_id'
});

Employee.belongsTo(Role, {
    foreignKey: 'role_id'
});

Role.hasMany(Employee, {
    foreignKey: 'role_id'
});

Employee.belongsTo(Department, {
    foreignKey: 'department_id'
});

Department.hasMany(Employee, {
    foreignKey: 'department_id'
});

module.exports = { Employee, Department, Role, Manager };