const { Category } = require('../models');

const categoryData = [
    {
      "category_name": "Produce"
    },

    {
      "category_name": "Dried Fruit"
    },

    {
      "category_name": "Mushroom Snacks"
    },

    {
      "category_name": "Beef Jerky"
    },

    {
      "category_name": "Nuts"
    },

    {
      "category_name": "Other"
    }    
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
