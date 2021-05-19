const { ProductTag } = require('../models');

const productTagData = [
    {
        "tag_name": "example"
    },

    {
        "tag_name": "example"
    },

    {
        "tag_name": "example"
    },

    {
        "tag_name": "example"
    },

    {
        "tag_name": "example"
    },

    {
        "tag_name": "example"
    },

    {
        "tag_name": "example"
    },

    {
        "tag_name": "example"
    }
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;