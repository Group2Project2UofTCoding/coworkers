const { Role } = require('../models');

const roleData = [
    {
        role_name: 'HR Manager',
    },
    {
        role_name: 'Marketing Manager',
    },
    {
        role_name: 'Accounting and Finance Manager',
    },
    {
        role_name: 'Information Technology Manager',
    },
    {
        role_name: 'Operations Manager',
    },
    {
        role_name: 'HR employee',
    },
    {
        role_name: 'Marketing ',
    },
    {
        role_name: 'Accountant',
    },
    {
        role_name: 'Programmer',
    },
    {
        role_name: 'Assistant operations manager',
    },
];

const seedRoles = () => Role.bulkCreate(roleData);

module.exports = seedroles;

