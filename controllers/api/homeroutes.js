const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Product, Category, Tag } = require('../models');

// Render the home page
router.get('/', (req, res) => {
    Product.findAll({
        // Query configuration
        // From the Product table, include the product ID, URL, title, and the timestamp from post creation
        attributes: [
            'id',
            'product_name',
            'price',
            'stock',
            'category_name'
          ],
        // Order the posts from most recent to least
        order: [[ 'price', 'DESC']],
        // From the User table, include the post creator's user name
        // From the Comment table, include all comments
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category,
                attributes: ['id', 'category_name'],
            },
            {
                model: Tag,
                attributes: ['id', 'tag_name'],
            }
        ]
    })
    // render the posts
    .then(dbProductData => {
      // create an array for the posts, using the get method to trim extra sequelize object data out
      const products = dbProductData.map(product => product.get({ plain: true }));
      // pass the posts into the homepage template
      res.render('homepage', {
        products,
        loggedIn: req.session.loggedIn
      });
    })
    // if there was a server error, return the error
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Render the single post page
router.get('/product/:id', (req, res) => {
    Product.findOne({
      where: {
        // specify the post id parameter in the query
        id: req.params.id
      },
      // Query configuration, as with the get all posts route
      attributes: [
        'id',
        'product_name',
        'price',
        'stock',
        'category_name'
      ],
      include: [
        {
            model: User,
            attributes: ['username']
        },
        {
            model: Category,
            attributes: ['id', 'category_name']
        },
        {
            model: Tag,
            attributes: ['id', 'tag_name']
        }
      ]
    })
      .then(dbProductData => {
        // if no post by that id exists, return an error
        if (!dbProductData) {
          res.status(404).json({ message: 'No product found with this id' });
          return;
        }
        // serialize the post data, removing extra sequelize meta data
        const product = dbProductData.get({ plain: true });
        // pass the posts and a session variable into the single post template
        res.render('single-product', {
            product,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        // if a server error occured, return an error
        console.log(err);
        res.status(500).json(err);
      });
  });

// Render the login page.  If the user is logged in, redirect to the home page.
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

// Render the sign up page.  If the user is logged in, redirect to the home page.
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;