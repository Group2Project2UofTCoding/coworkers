const router = require('express').Router();

const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);
router.use('/', dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;