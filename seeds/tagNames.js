const { Tag } = require('../models');

const tagData = [

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

const tagName = () => Tag.bulkCreate(tagData);

module.exports = tagName;