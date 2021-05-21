const { Tag } = require('../models');

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
];

const seedProductTags = () => Tag.bulkCreate(productTagData);

module.exports = seedProductTags;