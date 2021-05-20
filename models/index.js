const User = require('./user')
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

User.hasMany(Product, {
  foreignKey: 'user_id', 
  onDelete: 'CASCADE',
})

Product.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

Product.belongsTo(Category, {
   foreignKey: 'category_id',
   onDelete: 'CASCADE',
})

Category.hasMany(Product, {
     foreignKey: 'category_id',
})

Product.belongsToMany(Tag,{
    through: ProductTag
})

Tag.belongsToMany(Product,{
    through: ProductTag
})

module.exports = {
  User,
  Product,
  Category,
  Tag,
  ProductTag,
};