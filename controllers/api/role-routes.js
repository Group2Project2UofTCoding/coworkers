const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Department, Role, Employee } = require('../../models');

// Get all routes
router.get('/', (req, res) => {
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
    res.json(dbRoleData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// Get one routes
router.get('/', (req, res) => {
  Role.findOne({
    where: {
      id: req.params.id
    },
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
    res.json(dbRoleData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// Add a role
router.post("/", (req, res) => {
  Role.create({
    role_name: req.body.role_name,
    salary: req.body.salary,
    department_id: req.body.department_id
  })
    .then((dbRoleData) => res.json(dbRoleData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update a role
router.put("/:id", (req, res) => {
  updateObj = {};

  if(req.body.role_name) {
    updateObj.role_name = req.body.role_name;
  } else {
    this.delete
  }
  if(req.body.salary) {
    updateObj.salary = req.body.salary;
  } else {
    this.delete
  }
  if(req.body.department_id) {
    updateObj.department_id = req.body.department_id;
  } else {
    this.delete
  }

  Role.update(
    // {
    //   role_name: req.body.role_name,
    //   salary: req.body.salary,
    //   department_id: req.body.department_id
    // }
    updateObj,
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbRoleData) => {
      if (!dbRoleData) {
        res
          .json(404)
          .res.json({ message: "No role found with this id" });
        return;
      }
      res.json(dbRoleData);
    })
    .catch((err) => {
      console.log(err);
      req.status(500).json(err);
    });
});

// Delete a role
router.delete("/:id", (req, res) => {
  Role.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRoleData) => {
      if (!dbRoleData) {
        res.status(404).res.json({ message: "No role found with this id" });
        return;
      }
      res.json(dbRoleData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).res.json(err);
    });
});

module.exports = router;