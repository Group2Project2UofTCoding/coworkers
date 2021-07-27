const { Department } = require('../models');

const departmentData = [
    {
        department_name: 'Human Resources',
    },
    {
        department_name: 'Marketing',
    },
    {
        department_name: 'Accounting and Finance',
    },
    {
        department_name: 'Information Technology',
    },
    {
        department_name: 'Operations',
    },
];

const seedDepartments = () => Department.bulkCreate(departmentData);

module.exports = seedDepartments;

