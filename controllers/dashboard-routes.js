const router = require('express').Router();

// route for the dashboard page
router.get('/', (req, res) => {
  res.render('dashboard');
});

module.exports = router;