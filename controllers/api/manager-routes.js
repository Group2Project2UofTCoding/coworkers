const router = require('express').Router();
const { Employee, Manager } = require('../../models');

// Get all managers
router.get('/', (req,res) => {
  Manager.findAll({
    attributes: {
      exclude: ['password'],
    },
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


// Get One Manager
router.get('/:id', (req,res) => {
  Manager.findOne({
    where: {
      id: req.params.id
    },  
    attributes: {exclude: ['password']},
    include: [
      {
        model: Employee
      }
    ]
  })
  .then(dbManagerData => res.json(dbManagerData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// Update a Manager
router.put('/:id', (req, res) => {
  Manager.update({
    manager_name: req.body.manager_name,
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
    if(!dbManagerData) {
      res.sendStatus(404).json({ message: 'Manager not found! Please check the id'})
      return;
    }
    res.json(dbManagerData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Delete a Manager
router.delete('/:id', (req, res) => {
  Manager.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbManagerData => {
    if(!dbManagerData) {
      res.sendStatus(404).json({ message: 'Manager not found! Please check the id'});
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
  Manager.create({
    employee_id: req.body.employee_id,
    manager_name: req.body.manager_name,
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
});

// Login route for Manager
router.post('/login', (req, res) => {
  // {email: 'user@email.com', password: 'password' }
  Manager.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbManagerData => {
    if(!dbManagerData) {
      res.status(400).json({message: 'No user with that email address!'})
      return;
    }
    
    //authenticate the user
    const validPassword = dbManagerData.checkPassword(req.body.password);
    if(!validPassword) {
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
});

// Logout route for manager
router.post('/logout', (req, res) => {
  if(req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(400).end();
  }
});


module.exports = router;