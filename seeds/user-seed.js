const { User } = require('../models');

const userData = [
    {
        "username": "Steve",
        "email": "steve@gmail.com",
        "password": "password12345"
    },

    {
        "username": "Pat",
        "email": "pat@gmail.com",
        "password": "password23456"
    },

    {
        "username": "Chloe",
        "email": "chloe@gmail.com",
        "password": "password34567"
    },

    {
        "username": "Gabe",
        "email": "gabe@gmail.com",
        "password": "password45678"
    },

    {
        "username": "Jay",
        "email": "jay@gmail.com",
        "password": "password56789"
    }

];

const seedUser = () => User.bulkCreate(userData, {individualHooks: true });

module.exports = seedUser;
