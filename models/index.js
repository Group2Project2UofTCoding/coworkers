
const Employee = require('./Employee');
const Department = require('./Department');
const Role = require('./Role');
const Manager = require('./Manager');

// Create associations
Department.hasMany(Role, {
  foreignKey: 'department_id'
});

Role.belongsTo(Department, {
  foreignKey: 'department_id'
});

Role.hasMany(Employee, {
  foreignKey: 'role_id'
});

Employee.belongsTo(Department, {
  foreignKey: 'role_id'
});

Manager.hasMany(Employee, {
  foreignKey: 'manager_id'
});

Employee.belongsTo(Manager, {
  foreignKey: 'manager_id'
});

module.exports = { Employee, Department, Role, Manager };