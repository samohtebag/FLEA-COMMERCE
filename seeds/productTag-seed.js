const { Tag } = require('../models');

const productTagData = [
    {
        "tag_id": 1,
        "product_id": 2
    },

    {
        "tag_id": 3,
        "product_id": 3
    },

    {
        "tag_id": 2,
        "product_id": 4
    },

    {
        "tag_id": 4,
        "product_id": 4
    },

    {
        "tag_id": 5,
        "product_id": 1
    },

    {
        "tag_id": 6,
        "product_id": 6
    }
  
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;