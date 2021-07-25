const router = require('express').Router();

const employeeRoutes = require('./employee-routes');
const departmentRoutes = require('./department-routes');
const roleRoutes = require('./role-routes');

router.use('/employee', employeeRoutes);
router.use('/department', departmentRoutes);
router.use('/role', roleRoutes);

module.exports = router;