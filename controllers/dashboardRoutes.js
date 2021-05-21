//Dependencies
// the router and the database
const router = require('express').Router();
const sequelize = require('../config/connection');
// the models
const { User, Product, Category, Tag } = require('../models');
// the authorization middleware to redirect unauthenticated users to the login page
const withAuth = require('../utils/auth')

// A route to render the dashboard page, only for a logged in user
router.get('/', withAuth, (req, res) => {
    // All of the users products are obtained from the database
    Product.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'product_name',
        'product_price',
        'product_details',
        'stock',
        'category_id',
      ],
      include: [
        {
          model: Tag,
          attributes: ['id', 'tag_name'],
        },
        {
          model: Category,
          attributes: ['id', 'category_name']
        },
        {
            model: User,
            attributes: ['username']
        }
      ]
    })
      .then(dbProductData => {
        // serialize data before passing to template
        const products = dbProductData.map(product => product.get({ plain: true }));
        res.render('dashboard', { products, loggedIn: true });
        //const posts = dbPostData.map(post => post.get({ plain: true }));
        // res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/create', withAuth, (req, res) => {
  res.render('create-product', { loggedIn: true })
})

// A route to edit a post
router.get('/edit/:id', withAuth, (req, res) => {
  console.log("In Edit Route...")
  // All of the users posts are obtained from the database
  Product.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'product_name',
      'product_price',
      'product_details',
      'stock',
      'category_id'
    ],
    include: [
      {
        model: Category,
        attributes: ['id', 'category_name'],
      },
      {
        model: Tag,
        attributes: ['id', 'tag_name'],
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbProductData => {
      console.log("***************");
      console.log(dbProductData)
      // if no product by that id exists, return an error
      if (!dbProductData) {
        res.status(404).json({ message: 'No product found with this id' });
        return;
      }
      // serialize data before passing to template
      const product = dbProductData.get({ plain: true });
      console.log(product);
      res.render('edit-product', { product, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// A route to edit the logged in user
router.get('/edituser', withAuth, (req, res) => {
  // Acess the User model and run the findOne() method to get a single user based on parameters
  User.findOne({
    // when the data is sent back, exclude the password property
    attributes: { exclude: ['password'] },
    where: {
      // use id as the parameter for the request
      id: req.session.user_id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        // if no user is found, return an error
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      // otherwise, return the data for the requested user
      const user = dbUserData.get({ plain: true });
      res.render('edit-user', {user, loggedIn: true});
    })
    .catch(err => {
      // if there is a server error, return that error
      console.log(err);
      res.status(500).json(err);
    })
  });

module.exports = router;