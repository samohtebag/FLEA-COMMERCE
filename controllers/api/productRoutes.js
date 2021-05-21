const router = require('express').Router();
const { Product, Category, Tag} = require('../../models');
const multer = require("multer");
const cloudinary = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET
      });
      const storage = new CloudinaryStorage({
      cloudinary: cloudinary,
      folder: "demo",
      allowedFormats: ["jpg", "png"],
      transformation: [{ width: 500, height: 500, crop: "limit" }]
      });
      const parser = multer({ storage: storage });
    

const uploadimage = (image) => {
  console.log(image)
  return new Promise ((resolve, reject) => {
    cloudinary.v2.uploader.upload(image, 
  function(error, result) {
    if(error) {
      return reject (error)
    } else {
    console.log(result.url)
    resolve( result.url)
    }
  })
});
}

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
  const productData = await Product.findAll({
    attributes: ['id', 'product_name', 'product_price', 'product_details', 'stock', 'category_id'],
    order: [['product_price', 'DESC']],
    include: [{
      model: Category,
      attributes: ['id', 'category_name'],
    },
    {
      model: Tag,
      attributes: ['id', 'tag_name'],
      //Check in on this b/c idk if we did the tag part right!!
    },
  ],
  });
  res.status(200).json(productData);
} catch (err) {
  res.status(500).json(err);
}
});

// update product
router.put('/edit/:id', (req, res) => {
  
//router.get('/product/:id', (req, res) => {
    console.log("In Edit Route...")
    console.log(req.body)
    const image_url = uploadimage(req.body.product_image) 
    req.body.product_image = image_url
    console.log(req.body)
    
    // update product data
    Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((product) => {
        // find all associated tags from ProductTag
        return ProductTag.findAll({ where: { product_id: req.params.id } });
      })
      .then((productTags) => {
        // get list of current tag_ids
        const productTagIds = productTags.map(({ tag_id }) => tag_id);
        // create filtered list of new tag_ids
        const newProductTags = req.body.tag_ids
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => {
            return {
              product_id: req.params.id,
              tag_id,
            };
          });
        // figure out which ones to remove
        const productTagsToRemove = productTags
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);
  
        // run both actions
        return Promise.all([
          ProductTag.destroy({ where: { id: productTagsToRemove } }),
          ProductTag.bulkCreate(newProductTags),
        ]);
      })
      .then((updatedProductTags) => res.json(updatedProductTags))
      .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
      });
  });

router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findByPk(req.params.id, {
      attributes: ['id', 'product_name', 'product_price', 'product_details', 'stock'],
    include: [{
      model: Category,
      attributes: ['id', 'category_name'],
    },
    {
      model: Tag,
      attributes: ['id', 'tag_name'],
    },
  ],
  });
  if(!productData) {
    res.status(404).json({
      message: 'No Product found with that id!'
    });
    return;
  }
  res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/image-upload", async (req, res) => {
  // collected image from a user

  try{
  const data =  {
    image: req.body.image,
  }
  console.log(req.body);

    // upload image here
    const pictureUplaod = await cloudinary.uploader.upload(data.image);
  res.status(200).json(pictureUplaod);
  } 
 catch (err) {
  res.status(500).json(err);
}
});


// create new product
router.post('/', (req, res) => {

  Product.create({
    product_name: req.body.product_name,
    user_id: req.session.user_id,
    product_price: req.body.product_price,
    product_details: req.body.product_details,
    stock: req.body.stock,

  })
    .then((product) => {
      //if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      //if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});



router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deleteProduct) => {
    res.json(deleteProduct);
  })
  .catchThrow((err) => res.json(err));
});

module.exports = router;