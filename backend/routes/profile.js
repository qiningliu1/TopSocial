const express = require('express');
const{getProfile} = require('../controllers/profileControllers')
const profileRouter = express.Router();

profileRouter.get('/',getProfile)

module.exports = profileRouter;