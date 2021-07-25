const router = require('express').Router();
const { Department, Role } = require('../../models');

// Get all departments
router.get('/', (req, res) => {
  Department.findAll({
    include: [
      {
        model: Role,
        attributes: ['role_name']
      }
    ]
  })
  .then(dbDepartmentData => {
    res.json(dbDepartmentData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// Get one department
router.get('/:id', (req, res) => {
  Department.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Role,
        attributes: ['role_name']
      }
    ]
  })
  .then(dbDepartmentData => {
    res.json(dbDepartmentData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// Add a department
router.post("/", (req, res) => {
  Department.create({
    department_name: req.body.department_name
  })
    .then((dbDepartmentData) => res.json(dbDepartmentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update a department
router.put("/:id", (req, res) => {
  Department.update(
    {
      department_name: req.body.department_name
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbDepartmentData) => {
      if (!dbDepartmentData) {
        res
          .json(404)
          .res.json({ message: "No department found with this id" });
        return;
      }
      res.json(dbDepartmentData);
    })
    .catch((err) => {
      console.log(err);
      req.status(500).json(err);
    });
});

// Delete a department
router.delete("/:id", (req, res) => {
  Department.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbDepartmentData) => {
      if (!dbDepartmentData) {
        res.status(404).res.json({ message: "No department found with this id" });
        return;
      }
      res.json(dbDepartmentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).res.json(err);
    });
});

module.exports = router;