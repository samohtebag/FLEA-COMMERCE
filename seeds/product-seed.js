const { Product } = require('../models');

const productData = [
    {
        "product_name": "Hazy Crazy",
        "price": 49.99,
        "stock": 10,
        "category_id": 1
      },
      
    {
        "product_name": "Purple Dragon",
        "price": 24.99,
        "stock": 23,
        "category_id": 2
      },

    {
        "product_name": "Bedtime Story",
        "price": 44.99,
        "stock": 12,
        "category_id": 3
      },
      
    {
        "product_name": "Girl Scout Cookies",
        "price": 34.99,
        "stock": 20,
        "category_id": 4
      },

    {
      "product_name": "Punch Breath",
      "price": 40.00,
      "stock": 20,
      "category_id": 5
    }
  ];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;