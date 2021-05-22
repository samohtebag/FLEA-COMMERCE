const { Product } = require('../models');

const productData = [
    {
        "product_name": "Hazy Crazy",
        "product_price": 49.00,
        "stock": 10,
        "category_id": 1,
        "product_details": "really goood weed",
        "user_id": 1,
        "user_email": "Jason@gmail.com"
      },
      
    {
        "product_name": "Purple Dragon",
        "product_price": 24.99,
        "stock": 23,
        "category_id": 2,
        "product_details": "really goood weed",
        "user_id": 2,
        "user_email": "Jason@gmail.com"
      },

    {
        "product_name": "Bedtime Story",
        "product_price": 44.99,
        "stock": 12,
        "category_id": 3,
        "product_details": "really goood weed",
        "user_id": 3,
        "user_email": "Jason@gmail.com"
      },
      
    {
        "product_name": "Girl Scout Cookies",
        "product_price": 34.99,
        "stock": 20,
        "category_id": 4,
        "product_details": "really goood weed",
        "user_id": 4,
        "user_email": "Jason@gmail.com"
      },

    {
        "product_name": "Product 2",
        "product_price": 29.99,
        "stock": 22,
        "category_id": 2,
        "product_details": "really goood weed",
        "user_id": 5,
        "user_email": "Jason@gmail.com"
      },

    {
        "product_name": "Product 3",
        "product_price": 29.99,
        "stock": 22,
        "category_id": 3,
        "product_details": "really goood weed",
        "user_id": 2,
        "user_email": "Jason@gmail.com"
      },
      
    {
        "product_name": "Product 4",
        "product_price": 29.99,
        "stock": 22,
        "category_id": 4,
        "product_details": "really goood weed",
        "user_id": 3,
        "user_email": "Jason@gmail.com"
      },

    {
        "product_name": "Product 5",
        "product_price": 29.99,
        "stock": 22,
        "category_id": 5,
        "product_details": "really goood weed",
        "user_id": 5,
        "user_email": "Jason@gmail.com"
    }
  
  ];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;