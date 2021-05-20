const { Tag } = require('../models');

const productTagData = [
    {
        "tag_name": "Sativa"
    },

    {
        "tag_name": "Indica"
    },

    {
        "tag_name": "Hybrid"
    },

    {
        "tag_name": "Edibles"
    },

    {
        "tag_name": "Mushrooms"
    },

    {
        "tag_name": "Eggs"
    }
  
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;