const { Tag } = require('../models');

const productTagData = [
    {
    "tag_name": "free-range"
    },

    {
      "tag_name": "dried goods"
    },

    {
      "tag_name": "organic"
    },

    {
      "tag_name": "fresh"
    },

    {
      "tag_name": "allergies"
    },

    {
      "tag_name": "handmade"
    },
];

const seedProductTags = () => Tag.bulkCreate(productTagData);

module.exports = seedProductTags;