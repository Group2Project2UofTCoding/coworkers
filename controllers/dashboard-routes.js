const router = require('express').Router();
const { Employee, Department, Manager, Role } = require('../models');

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
      // {
      //   model: Manager,
      //   attributes: ['manager_name']
      // }
    ]
  })
  .then(dbEmployeeData => {
    const employees = dbEmployeeData.map(emp => emp.get({plain:true}));
    const data = [];
    data.push(employees);
    Role.findAll({
      include: [
        {
          model: Department,
          attributes: ['department_name']
        },
        {
          model: Employee,
          attributes: ['id','first_name','last_name']
        }
      ]
    })
    .then(dbRoleData => {
      const roles = dbRoleData.map(role => role.get({plain:true}));
      data.push(roles);
      return data
    })
    .then(data => {
      // if we need more info other than just employees we could do it here
      res.render('dashboard', {data, loggedIn: req.session.loggedIn});
    });
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

// route for the dashboard page
router.get('/', (req, res) => {
  res.render('dashboard');
});

module.exports = router;