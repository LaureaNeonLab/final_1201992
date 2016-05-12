angular.module("starter", ["ionic", "firebase"])

.factory("Items", function($firebaseArray) {
  var itemsRef = new Firebase("https://1201992firebase.firebaseio.com/items");
  return $firebaseArray(itemsRef);
})

.controller("ListCtrl", function($scope, Items) {
  $scope.items = Items;
  $scope.addItem = function() {
    var name = prompt("What do you need to buy?");
    if (name) {
      $scope.items.$add({
        "name": name
      });
    }
  };
});