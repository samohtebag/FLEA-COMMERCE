const sequelize = require('../config/connection');
const { user, Category, Product, ProductTag, Tag } = require('../models');


const categorySeed = require('./category-seed.json');
const productSeed = require('./product-seed.json');
const productTags = require('./productTag-seed.json');
const tagSeed = require('./tag-seed.json');
const userSeeds = require('./user-seed.json');

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