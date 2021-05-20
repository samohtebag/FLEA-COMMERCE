const { Product } = require('../models');

const productData = [
    {
        "product_name": "Hazy Crazy",
        "product_price": 49.00,
        "stock": 10,
        "category_id": 1,
        "product_details": "really goood weed"
      },
      
    {
        "product_name": "Product 2",
        "product_price": 29.99,
        "stock": 22,
        "category_id": 2,
        "product_details": "really goood weed"
      },

    {
        "product_name": "Product 3",
        "product_price": 29.99,
        "stock": 22,
        "category_id": 3,
        "product_details": "really goood weed"
      },
      
    {
        "product_name": "Product 4",
        "product_price": 29.99,
        "stock": 22,
        "category_id": 4,
        "product_details": "really goood weed"
      },

    {
      "product_name": "Product 5",
      "product_price": 29.99,
      "stock": 22,
      "category_id": 5,
      "product_details": "really goood weed"
    }
  ];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;