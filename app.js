var app = angular.module('iTunes', []);

app.controller('MainController', function (Songs, $scope) {
    $scope.songs = Songs;
});