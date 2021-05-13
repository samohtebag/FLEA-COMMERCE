const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWS_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_PASSWORD,
        process.env.DB_USER, 
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelize;