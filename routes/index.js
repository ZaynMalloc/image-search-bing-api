var express = require('express');
var router = express.Router();
var Search = require('bing.search');
var util = require('util');
search = new Search('B+RaEHp46dc2tjBUALkwZh3zpb57BflxAi+ywCW3pUk');


/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/image/:image', function(req, res, next){

    
  search.images(req.params.image,
  {top: 5},
  function(err, results) {
    res.send(results);
  }
);
    
});

module.exports = router;
