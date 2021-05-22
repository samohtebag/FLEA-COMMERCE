const { Category } = require('../models');

const categoryData = [
    {
      "category_name": "Weed"
    },

    {
      "category_name": "Eggs"
    },

    {
      "category_name": "Mushrooms"
    },

    {
      "category_name": "Weights"
    },

    {
      "category_name": "Chickens"
    },

    {
      "category_name": "Edibles"
    }    
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
