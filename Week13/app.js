let app = angular.module("akikStore", ["ngRoute"]);

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
	$scope.newGem = {};

	$scope.addGem = function(){
		let existingGems = localStorage.getItem('gems');
		if(existingGems === null){
			existingGems = [];
		}
		else{
			existingGems = JSON.parse(existingGems);
		}
		existingGems.push($scope.newGem);
		localStorage.setItem('gems', JSON.stringify(existingGems));
		$scope.resetForm();
	}

	$scope.resetForm = function(){
		$scope.newGem.type = '';
		$scope.newGem.weight = '';
		$scope.newGem.price = '';
		$scope.newGem.description = '';
		$scope.newGem.contactNumber = '';

		$scope.gemForm.$setPristine();
		$scope.gemForm.$setUntouched();
	}
}]);

app.controller('gemController', ['$scope', function($scope){
	
}]);

app.controller('gemListController', ['$scope', function($scope){
	$scope.gems = [];
	$scope.init = function(){
		let existingGems = localStorage.getItem('gems');
		if(existingGems === null){
			existingGems = [];
		}
		else{
			existingGems = JSON.parse(existingGems);
		}
		$scope.gems = existingGems;
	};
	$scope.init();
}]);

app.directive("singleGem", function(){
	return{
		templateUrl: 'partials/single-gem.html',
		scope: {
			gemData: '='
		},
		controller: 'gemController'
	}
});