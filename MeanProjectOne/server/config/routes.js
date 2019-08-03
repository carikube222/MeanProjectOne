//******************************************************************************
var path = require('path')
//******************************************************************************
//*************** ADD all your server/controllers/.js Here *********************
var friends = require("./../controllers/friends.js")
// var questions = require("./../controllers/questions.js")
// var users = require("./../controllers/users.js")

module.exports = function(app){
//******************************************************************************
  console.log('Hitting conig/routes!');
//******************************************************************************
//******************************************************************************
//show all friends- index
  app.get('/friends', function(req, res) {
    friends.index(req, res);
  });
//show one :id with show func
  app.get('/friends/:id', function(req, res) {
    friends.show(req, res);
  })
//create a new friend with create func.
  app.post('/friends', function(req, res) {
    friends.create(req, res);
  });
//update one friend :id with .update func
  app.put('/friends/:id', function(req, res) {
    friends.update(req, res);
  })
//delete one friend :id with .delete func
  app.delete('/friends/:id', function(req, res) {
    friends.delete(req, res);
  })
//***** Do the same thing for all your server/controllers .js*******************
//***** DON't FORGET 'friendS' **************************************************
}
//******************************************************************************

  // app.post('/qme', function(req, res) {
  //   console.log("SLACK Index in Poll Controller on Server", req);
  //   poll.slack(req, res);
  // })
///////////////
