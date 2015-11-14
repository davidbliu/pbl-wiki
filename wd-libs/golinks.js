
app.controller('GoController', ['$scope', '$http',  function($scope, $http) {
  $scope.message = 'test';
  $scope.filterOptions = ['recent', 'my', 'popular'];
  $http.get(ROOT_URL+'/recent_golinks?token=6461766964626c697540676d61696c2e636f6d')
    .success(function(data){
       $scope.golinks = data;
    });
}]);
