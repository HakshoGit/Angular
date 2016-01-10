angular.module('slack').controller('PingController', ['$scope', '$http', function($scope, $http){
	$http.get('http://api.coop.fr/api/ping').then(function(data){
		$scope.products = data.data;
	}, function(data){
		console.log("Une erreur s'est produite");
	});
}]);
