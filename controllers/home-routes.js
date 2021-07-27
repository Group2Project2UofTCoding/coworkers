const router = require('express').Router();

// Login route
router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
}); 

// Sign up route
router.get('/signup', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  // login or signup page
  req.render('signup');
});

