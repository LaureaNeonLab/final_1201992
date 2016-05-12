angular.module("starter", ["ionic", "firebase"])

.factory("Items", function($firebaseArray) {
  var itemsRef = new Firebase("https://1201992firebase.firebaseio.com/items");
  return $firebaseArray(itemsRef);
})

.controller("ListCtrl", function($scope, Items) {
  $scope.items = Items;
  $scope.addItem = function() {
    var name = prompt("What do you need to buy?");
    var needed = false;
    if (name) {
      $scope.items.$add({
        "name": name,
        "needed": needed
      });
    }
  };

  $scope.changeStatus = function(){
     if(this.item.needed == false){
        this.item.needed = true;
        $scope.items.$save(this.item);
     }else{
        this.item.needed = false;
        $scope.items.$save(this.item);
     }
  }
  
    $scope.deleteItem = function(){
      var r = confirm("Delete " + this.item.name + " from the shopping list?");
      if(r == true){
         $scope.items.$remove(this.item);
      }else{
        return;
      }
  }
});