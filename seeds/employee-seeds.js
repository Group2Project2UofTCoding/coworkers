const { Employee } = require('../models');

const employeeData = [

];

const seedEmployees = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployees;
