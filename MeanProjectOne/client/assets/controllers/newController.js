//***********************************************************************
app.controller('newController', function($scope, FriendFactory, $location) {
  console.log('New Controller Loaded');
  $scope.errors = {};

  $scope.create = function() {
    $scope.errors = {};
    friendsFactory.create($scope.newFriend, function(data) {
      if (data.errors) {
        console.log(data.errors);
        $scope.errors = data.errors;
      } else {
        $scope.newFriend = {};
        $location.url('/');
      }
    })
  }
})
