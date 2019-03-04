let app = angular.module("akikstore", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/new-gem.html',
        controller: 'newGemController'
    })
    .when('/gem-list', {
        templateUrl: 'partials/gem-list.html',
        controller: 'gemListController'
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

app.controller('newGemController', ['$scope', function($scope){
    
}]);

app.controller('gemController', ['$scope', function($scope){
    
}]);

app.controller('gemListController', ['$scope', function($scope){
    
}]);