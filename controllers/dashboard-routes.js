const router = require('express').Router();
const { Employee, Department, Manager, Role } = require('../../models');

// router to render all details
router.get('/', (req, res) => {
  Employee.findAll({
    include: [
      {
        model: Role,
        attributes: ['role_name', 'salary'],
        include: [
          {
            model: Department,
            attributes: ['department_name']
          }
        ]
      },
      {
        model: Manager,
        attributes: ['manager_name']
      }
    ]
  })
  .then(dbEmployeeData => {
    const employees = dbEmployeeData.map(emp => emp.get({plain:true}));
    // return employees;
    res.render('dashboard', employees);
  })
});

// Edit an employee
router.get('/edit/:id', (req, res) => {
  Employee.findOne({
    include: [
      {
        model: Role,
        attributes: ['role_name', 'salary'],
        include: [
          {
            model: Department,
            attributes: ['department_name']
          }
        ]
      },
      {
        model: Manager,
        attributes: ['manager_name']
      }
    ]
  })
  .then(dbEmployeeData => {
    const employee = dbEmployeeData.get({plain:true});
    // return employees;
    res.render('dashboard', employee);
  })
});  

module.exports = router;