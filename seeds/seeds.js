const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const productUserData = require('./productUserData.json');
const idTagsData = require('./idTags.json');
const tagNamesData = require('./tagNames.json');