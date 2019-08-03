//***********************************************************************
console.log('Friends Factory');
//***********************************************************************
app.factory('friendsFactory', function($http) {
  console.log('Friends Factory loaded');
  var friends=[];
  var factory = {};

  factory.index  = function(callback) {
    $http.get('/friends').then(function(res) {
      if (typeof callback === 'function') {
        // friends =res.data;
        // callback(friends);
        callback(res.data);
      }
    });
  }
  factory.show = function(id, callback) {
    $http.get('/friends/'+id).then(function(res) {
      if (typeof callback === 'function') {
        callback(res.data);
      }
    });
  }
  factory.create = function(newFriend, callback) {
    $http.post('/friends', newFriend).then(function(res) {
      console.log(res);
      console.log(res.data);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  factory.update = function(friend, callback) {
    $http.put('/friends/'+friend._id, friend).then(function(res) {
      console.log(friend);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  factory.delete = function(friend, callback) {
    $http.delete('/friends/'+friend._id).then(function(res) {
      console.log(res.data);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }

  return factory;
})
