var app = angular.module('starter');


app.controller('GettingDataController',function ($scope,$http) {
    $scope.data;
    $scope.getData = function () {
        $http.get('/api/random')
        .success(function (response) {
            
            console.log(response);
            $scope.data = response;
        })
        .error(function (err) {
            console.log(err);
        })
    }
});

