const { Product } = require('../models');

const productData = [
    {
        "product_name": "Hazy Crazy",
        "price": 49.00,
        "stock": 10,
        "category_id": 1
      },
      
    {
        "product_name": "Product 2",
        "price": 29.99,
        "stock": 22,
        "category_id": 2
      },

    {
        "product_name": "Product 3",
        "price": 29.99,
        "stock": 22,
        "category_id": 3
      },
      
    {
        "product_name": "Product 4",
        "price": 29.99,
        "stock": 22,
        "category_id": 4
      },

    {
      "product_name": "Product 5",
      "price": 29.99,
      "stock": 22,
      "category_id": 5
    }
  ];

const seedProducts = () => Product.bulkCreate(productData);

module.export = seedProducts;