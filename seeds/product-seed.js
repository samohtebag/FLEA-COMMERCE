const { Product } = require('../models');

const productData = [
  {
      "product_name": "Western Range Mushroom Snack",
      "product_price": 9.00,
      "stock": 10,
      "category_id": 1,
      "product_details": "Smokey Bacon",
      "user_id": 5,
      "product_image": "http://res.cloudinary.com/dj2ooceyg/image/upload/c_scale,w_150/v1621649108/Smokey_Bacon_Front_re5eyz.png",
      "user_email": "jay@gmail.com"
    },
    {
      "product_name": "Western Range Mushroom Snack",
      "product_price": 9.00,
      "stock": 10,
      "category_id": 1,
      "product_details": "Spicy Cajun",
      "user_id": 1,
      "product_image": "http://res.cloudinary.com/dj2ooceyg/image/upload/c_scale,w_150/v1621649108/Spicy_Cajun_Front_mopzpz.png",
      "user_email": "chloe@gmail.com"
    },
    {
      "product_name": "Western Range Musroom Snack",
      "product_price": 9.00,
      "stock": 10,
      "category_id": 1,
      "product_details": "Sweet Chili",
      "user_id": 2,
      "product_image": "http://res.cloudinary.com/dj2ooceyg/image/upload/c_scale,w_150/v1621649108/Sweet_Chili_Front_qfesyk.png",
      "user_email": "pat@gmail.com"
    },  
    {
      "product_name": "Western Range Beef Jerky",
      "product_price": 10.00,
      "stock": 10,
      "category_id": 1,
      "product_details": "Original",
      "user_id": 4,
      "product_image": "http://res.cloudinary.com/dj2ooceyg/image/upload/c_scale,w_150/v1621653205/MockupWR_BeefJerky_No_Halal_bg8392.png",
      "user_email": "gabe@gmail.com"
    },  
    {
      "product_name": "Western Range Beef Jerky",
      "product_price": 10.00,
      "stock": 10,
      "category_id": 2,
      "product_details": "Jalapeño",
      "user_id": 5,
      "product_image": "http://res.cloudinary.com/dj2ooceyg/image/upload/c_scale,w_150/v1621653205/MockupWR_Jalapeno_No_Halal_yo5nxj.png",
      "user_email": "jay@gmail.com"
    },  
    {
      "product_name": "Western Range Beef Jerky",
      "product_price": 10.00,
      "stock": 10,
      "category_id": 2,
      "product_details": "Teriyaki",
      "user_id": 1,
      "product_image": "http://res.cloudinary.com/dj2ooceyg/image/upload/c_scale,w_150/v1621653206/MockupWR_Teriyaki_No_Halal_xafd7s.png",
      "user_email": "chloe@gmail.com"
    },  
];


const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;