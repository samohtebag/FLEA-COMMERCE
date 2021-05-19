const sequelize = require('../config/connection');
const { User, Category, Product, ProductTag, Tag } = require('../models');


const categorySeed = require('./category-seed');
const productSeed = require('./product-seed');
const productTags = require('./productTag-seed');
const tagSeed = require('./tag-seed');
const userSeeds = require('./user-seed');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
        console.log('\n-----DATABASE SYNCED -----\n');

    await categorySeed();
        console.log('\n-----CATEGORY SYNCED -----\n');

    await productSeed();
        console.log('\n-----PRODUCTS SYNCED -----\n');

    await productTags();
        console.log('\n-----PRODUCT TAGS SYNCED -----\n');

    await tagSeed();
        console.log('\n-----TAGS SYNCED -----\n');

    await userSeeds();
        console.log('\n-----USERS SYNCED -----\n');

    process.exit(0);
};

seedDatabase();