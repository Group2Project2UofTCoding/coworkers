const router = require('express').Router();
const { Employee, Department, Manager, Role } = require('../../models');

// Get all employees
router.get('/', (req, res) => {
  Employee.findAll({
    include: [
      'employees',
      'report_to',
      {
        model: Role,
        attributes: ['role_name', 'salary'],
        include: [
          {
            model: Department,
            attributes: ['department_name']
          }
        ]
      }
    ]
  })
    .then(dbEmployeeData => {
      res.json(dbEmployeeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// Get one employee
router.get('/:id', (req, res) => {
  Employee.findOne({
    where: {
      id: req.params.id
    },
    include: [
      'manager',
      'employees',
      {
        model: Role,
        attributes: ['role_name'],
        include: [
          {
            model: Department,
            attributes: ['department_name']
          }
        ]
      }
    ]
  })
    .then(dbEmployeeData => {
      res.json(dbEmployeeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});


// Post an employee
router.post("/", (req, res) => {
  console.log('this is the result', req.body);
  Employee.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    role_id: req.body.role_id,
    email: req.body.email,
    phone_number: req.body.phone_number,
    address: req.body.address,
    sin: req.body.sin,
    manager_id: req.body.manager_id,
    date_of_hire: req.body.date_of_hire,
    photo: req.body.photo
  })
    .then((dbEmployeeData) => res.json(dbEmployeeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update an employee
router.put("/:id", (req, res) => {
  Employee.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      role_id: req.body.role_id,
      email: req.body.email,
      phone_number: req.body.phone_number,
      address: req.body.address,
      sin: req.body.sin,
      manager_id: req.body.manager_id,
      date_of_hire: req.body.date_of_hire,
      photo: req.body.photo
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbEmployeeData) => {
      if (!dbEmployeeData) {
        res
          .json(404)
          .res.json({ message: "No employee found with this id" });
        return;
      }
      res.json(dbEmployeeData);
    })
    .catch((err) => {
      console.log(err);
      req.status(500).json(err);
    });
});

// Delete an employee
router.delete("/:id", (req, res) => {
  Employee.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbEmployeeData) => {
      if (!dbEmployeeData) {
        res.status(404).res.json({ message: "No employee found with this id" });
        return;
      }
      res.json(dbEmployeeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).res.json(err);
    });
});

module.exports = router;