const router = require('express').Router();

const employeeRoutes = require('./employee-routes');
const departmentRoutes = require('./department-routes');

router.use('/employee', employeeRoutes);
router.use('/department', departmentRoutes);

module.exports = router;