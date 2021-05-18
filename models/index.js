const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})

Category.hasMany(Protect, {
  foreignKey: 'category_id'
})

Product.belongsToMany(Tag,{
    through: {
        model: ProductTag, 
    },
  foreignKey: 'product_id'
})

Tag.belongsToMany(Products,{
    through: {
        model: ProductTag, 
    },
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};