const { Employee } = require('../models');

const employeeData = [
    {
        username: 'Ankur_Shahi',
        first_name: 'Ankur',
        last_name: 'Shahi',
        role_id: 1,
        manager_id: 1,
        date_of_hire: '04/07/2021',
        photo: null // to be added later
    },
    {
        username: 'Clinton_Sebastian',
        first_name: 'Clinton',
        last_name: 'Sebastian',
        role_id: 2,
        manager_id: 1,
        date_of_hire: '04/07/2021',
        photo: null
    },
    {
        username: 'Harmony_Hood',
        first_name: 'Harmony',
        last_name: 'Hood',
        role_id: 3,
        manager_id: 1,
        date_of_hire: '04/07/2021',
        photo: null
    },
    {
        username: 'Rizzel_Nolasco',
        first_name: 'Rizzel',
        last_name: 'Nolasco',
        role_id: 4,
        manager_id: 1,
        date_of_hire: '04/07/2021',
        photo: null
    },
    {
        username: 'Jaspreet_Khela',
        first_name: 'Jaspreet',
        last_name: 'Khela',
        role_id: 5,
        manager_id: 1,
        date_of_hire: '04/07/2021',
        photo: null
    },

    // random names courtesy of https://www.behindthename.com/random/

    {
        username: null,
        first_name: 'Ramesh',
        last_name: 'Giobbe',
        role_id: 6,
        manager_id: 1,
        date_of_hire: '04/07/2021',
        photo: null
    },
    {
        username: null,
        first_name: 'Dunja',
        last_name: 'Mar',
        role_id: 7,
        manager_id: 2,
        date_of_hire: '04/07/2021',
        photo: null
    },
    {
        username: null,
        first_name: 'Merideth',
        last_name: 'Sigeberht',
        role_id: 8,
        manager_id: 3,
        date_of_hire: '04/07/2021',
        photo: null
    },
    {
        username: null,
        first_name: 'Waheeda',
        last_name: 'Shahi',
        role_id: 9,
        manager_id: 4,
        date_of_hire: '04/07/2021',
        photo: null
    },
    {
        username: null,
        first_name: 'Domhnall',
        last_name: 'Glaucus',
        role_id: 10,
        manager_id: 5,
        date_of_hire: '04/07/2021',
        photo: null
    }
];

const seedEmployees = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployees;
