//***********************************************************************
app.controller('mainController', function($scope, FriendFactory) {
  console.log('Main Controller Loaded');
  friendsFactory.index(function(data) {
    $scope.friends = data;
  })

  $scope.delete = function(friend) {
    friendsFactory.delete(friend, function(data) {
      friendsFactory.index(function(data) {
        $scope.friends = data;
      });
    });
  }
})
