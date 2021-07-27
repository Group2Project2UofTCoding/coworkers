const router = require('express').Router();

const employeeRoutes = require('./employee-routes');
const departmentRoutes = require('./department-routes');
const roleRoutes = require('./role-routes');
const managerRoutes = require('./manager-routes');

router.use('/employee', employeeRoutes);
router.use('/department', departmentRoutes);
router.use('/role', roleRoutes);
router.use('/manager', managerRoutes);

module.exports = router;