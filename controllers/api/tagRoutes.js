const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
attributes: ['id', 'tag_name'],
include: [{
  model: Product,
  attributes: ['id', 'product_name', 'product_price', 'stock', 'category_id'],
}]
    });
    res.status(200).json(tagData);
  }catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      attributes: ['id', 'tag_name'],
include: [{
  model: Product,
  attributes: ['id', 'product_name', 'product_price', 'stock', 'category_id'],
}],
    });
    if (!tagData) {
      res.status(404).json({
        message: 'No Tag found with that ID'
      });
      return;
    }
    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
  .then((tagData) => {
    res.json(tagData);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name,
  }, {
    where: {
      id: req.params.id,
    },
  })
  .then((updateTag) => {
    res.json(updateTag);
  })
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy ({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedTag) => {
    res.json(deletedTag);
  })
  .catchThrow((err) => res.json(err));
});

module.exports = router;