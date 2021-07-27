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
    // if we need more info other than just employees we could do it here
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
    res.render('dashboard', employee);
  })
});  

module.exports = router;