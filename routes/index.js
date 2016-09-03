var express = require('express');
var router = express.Router();
var Search = require('bing.search'); 
var util = require('util');
search = new Search(/*Redacted the API key*/);


/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get image results  */

router.get('/image/:image', function(req, res, next){

    
  search.images(req.params.image, //Search for images
  {top: 5}, //Show 5 results
  function(err, results) {
    res.send(results); //Display results
  }
);
    
});

module.exports = router;
