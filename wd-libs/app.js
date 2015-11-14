
var app = angular.module('pblApp',[]);
var ROOT_URL = 'http://wd.berkeley-pbl.com:3000'

app.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

