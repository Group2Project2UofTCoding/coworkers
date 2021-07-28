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
    // get all the employees
    const allEmployees = dbEmployeeData.map(emp => emp.get({plain:true}));
    // check the manager id
    const managerId = el => el.id === parseInt(req.session.manager_id);
    // find the index of the manager
    const manager_index = allEmployees.findIndex(managerId);
    // splice the manager seperately
    const manager = allEmployees.splice(manager_index, 1);
    // filter the employees belong to this manager
    const filteredEmployees = allEmployees.filter(el => el.manager_id === parseInt(req.session.manager_id));
    const data = [];
    data.push(manager);
    data.push(filteredEmployees);
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