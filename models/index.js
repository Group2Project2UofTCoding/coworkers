const Employee = require('./Employee');
const Department = require('./Department');
const Role = require('./Role');
const Manager = require('./Manager');

// Create associations
Employee.hasMany(Employee, {
  foreignKey: 'manager_id',
  as: 'employees',
});

Employee.belongsTo(Employee, {
  foreignKey: 'manager_id',
  as: 'manager',
  constraints: false
});

// Manager.hasMany(Employee, {
//   foreignKey: 'employee_id',
//   constraints: false
// });

Department.hasMany(Role, {
  foreignKey: 'department_id'
});

Role.belongsTo(Department, {
  foreignKey: 'department_id'
});

Role.hasMany(Employee, {
  foreignKey: 'role_id'
});

Employee.belongsTo(Role, {
  foreignKey: 'role_id'
});


module.exports = { Employee, Department, Role, Manager };