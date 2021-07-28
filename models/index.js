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

Manager.hasMany(Employee, {
    foreignKey: 'manager_id'
});

Employee.belongsTo(Role, {
    foreignKey: 'role_id',
    constraints: false
});

Role.hasMany(Employee, {
    foreignKey: 'role_id',
    constraints: false
});


module.exports = { Employee, Department, Role, Manager };