const router = require('express').Router();
const { Employee, Manager } = require('../../models');
const validator = require('validator');

// Get all managers
router.get('/', (req, res) => {
  Manager.findAll({
    attributes: {
      exclude: ['password'],
    },
    include: [
      {
        model: Employee,
        as: 'manager_info',
        include: ['employees']
      }
    ]
  })
    .then(dbManagerData => res.json(dbManagerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});


// Get One Manager
router.get('/:id', (req, res) => {
  Manager.findOne({
    where: {
      id: req.params.id
    },
    attributes: { exclude: ['password'] },
    // include: [
    //   {
    //     model: Employee
    //   }
    // ]
  })
    .then(dbManagerData => res.json(dbManagerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// Update a Manager
router.put('/:id', (req, res) => {
  if (validator.isEmail(req.body.email)) {
    Manager.update({
      id: req.body.managerId,
      email: req.body.email,
      password: req.body.password,
    },
      {
        individualHooks: true,
        where: {
          id: req.params.id
        }
      })
      .then(dbManagerData => {
        if (!dbManagerData) {
          res.sendStatus(404).json({ message: 'Manager not found! Please check the id' })
          return;
        }
        res.json(dbManagerData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

// Delete a Manager
router.delete('/:id', (req, res) => {
  Manager.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbManagerData => {
      if (!dbManagerData) {
        res.sendStatus(404).json({ message: 'Manager not found! Please check the id' });
        return;
      }
      res.json(dbManagerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// add a manager
router.post('/', (req, res) => {
  if (validator.isEmail(req.body.email)) {
    Manager.create({
      // employee_id: req.body.employee_id,
      id: req.body.managerId,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbManagerData => {
        req.session.save(() => {
          // declare session variables
          req.session.manager_id = dbManagerData.id;
          req.session.email = dbManagerData.email;
          req.session.loggedIn = true;
          // send response
          res.json({ user: dbManagerData, message: 'You are now logged in!' });
          console.log(req.session);
          res.json(dbManagerData);
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

// Login route for Manager
router.post('/login', (req, res) => {
  // {email: 'user@email.com', password: 'password' }
  if (validator.isEmail(req.body.email) == true && validator.isStrongPassword(req.body.password, [{ minLength: 8 }]) == true) {
    Manager.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbManagerData => {
      if (!dbManagerData) {
        res.status(400).json({ message: 'No user with that email address!' })
        return;
      }

      //authenticate the user
      const validPassword = dbManagerData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }

      req.session.save(() => {
        // declare session variables
        req.session.manager_id = dbManagerData.id;
        req.session.email = dbManagerData.email;
        req.session.loggedIn = true;
        // send response
        res.json({ user: dbManagerData, message: 'You are now logged in!' });
      });
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  } else {
    res.status(500).json(err);
  }
});

// Logout route for manager
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(400).end();
  }
});


module.exports = router;