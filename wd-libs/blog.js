
app.controller('BlogController', ['$scope', '$http',  function($scope, $http) {
  $scope.message = 'test';
  $scope.filterOptions = ['recent', 'my', 'popular'];
  $http.get(ROOT_URL+'/all_blogposts?token=6461766964626c697540676d61696c2e636f6d')
    .success(function(data){
       $scope.posts = data;
    });
}]);
