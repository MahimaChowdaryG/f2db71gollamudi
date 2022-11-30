var express = require('express'); 
const animal_controlers= require('../controllers/animals'); 
var router = express.Router(); 
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET animals */ 
router.get('/', animal_controlers.animal_view_all_Page ); 

/* GET detail animal page */ 
router.get('/detail', animal_controlers.animal_view_one_Page); 

/* GET create animal page */ 
router.get('/create', secured, animal_controlers.animal_create_Page); 

/* GET create update page */ 
router.get('/update', secured, animal_controlers.animal_update_Page); 

/* GET delete animal page */ 
router.get('/delete', secured, animal_controlers.animal_delete_Page); 

module.exports = router; 
