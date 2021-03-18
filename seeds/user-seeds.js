const { User } = require('../models');

const userData = [{
        username: 'Kirk',
        password: 'krik'

    },
    {
        username: 'Jack',
        password: 'kcaj'
    },
    {
        username: 'Joe',
        password: 'eojnp'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;