var express = require('express');
var router = express.Router();
var Search = require('bing.search'); //Loading Bing Search API
var util = require('util');
search = new Search('B+RaEHp46dc2tjBUALkwZh3zpb57BflxAi+ywCW3pUk');

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//Search for Image
router.get('/image/:term', function(req, res, next){
    
  var db = req.db;
  var history = db.get('history');
  var typedTerm = req.params.term;
   
  history.insert({ 
       
    "searchedTerm": typedTerm
       
   
   });
   
    
  search.images(typedTerm, //Seaching Image using URL 
  {top: 5}, //Show 5 results per page
  function(err, results) {
      
    res.send(results); //Send JSON results of seach term
      
  }
);
});
          
router.get('/history', function(req, res, next){
    
    
    res.send(history);
    
}); 
    


module.exports = router;
