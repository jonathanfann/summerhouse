// create the module and name it summerApp
    var summerApp = angular.module('summerApp', ['ngRoute']);
	summerApp.config( ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'pages/home.html'
			})
			.when('/about', {
				templateUrl: 'pages/about.html'
			})
			.otherwise({
				redirectTo: '/'
			});
        $locationProvider.hashPrefix('!');
	}]);

    // create the controller and inject Angular's $scope
    summerApp.controller('summerController', function($scope, $location, $anchorScroll) {
        $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
        };
    });