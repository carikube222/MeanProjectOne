//***********************************************************************
var mongoose  = require('mongoose'),
    Friend    = mongoose.model('Friend');
//************* Change to the right mongoose.model **********************
//***********************************************************************
module.exports = {
//***********************************************************************
  index: function(req, res) {
    console.log('Friends index');
    Friend.find({}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  show: function(req, res) {
    console.log(req.params);
    Friend.findOne({_id: req.params.id}, function(err,data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        console.log(data);
        res.json(data);
      }
    })
  },
  create: function(req, res) {
    console.log('Friends create');
    console.log('REQ.body', req.body);
//************************ This part Change depends on Schema************
//**** var favorite = new Favorite({_user: req.params.id, _movie: req.body.movie_id});
    var friend = new Friend({name: req.body.name, age: req.body.age});
    // var friend = new Freind(req.body); <-- This works! also but don't use this for the belt. you'll get confused.
    console.log(friend);
//******************************************************************************
//**********friend. not Friend because var friend = new Friend******************
    friend.save(function(err) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        // res.redirect('/friends');
        res.json({success: true});
        // res.json({placeholder: 'not created yet!'})
      }
    })
  },
  update: function(req, res) {
    console.log(req.params, req.body);
    Friend.findOne({_id: req.params.id}, function(err, data) {
      for (var i in req.body) {
        if (req.body[i] != data[i]) {
        data[i] = req.body[i];
        }
      }
      console.log(data);
      data.save(function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          console.log(data);
          res.json(data);
        }
      })
    })
  },
  delete: function(req, res) {
    console.log(req.params.id);
    Friend.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        Friend.remove(data, function(error, datum) {
          if (error) {
            console.log(error);
            res.json(error);
          } else {
            console.log(datum);
            res.json(datum);
          }
        })
      }
    })
  }
//***********************************************************************
}
//***********************************************************************
