const router = require('express').Router();
const {
  Category,
  Product
} = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      attributes: ['id', 'category_name'],
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      attributes: ['id', 'category_name'],
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      },
    });
    if (!categoryData) {
      res.status(404).json({
        message: 'No Category found with that ID!'
      });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
      category_name: req.body.category_name,
    })
    .then((categoryData) => {
     res.json(categoryData);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
      category_name: req.body.category_name,
    }, {
      where: {
        id: req.params.id,
      },
    })
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});


router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
 Category.destroy({
   where: {
     id: req.params.id,
   },
 })
 .then((deletedCategory) => {
   res.json(deletedCategory);
 })
 .catchThrow((err) => res.json(err));
});
module.exports = router;