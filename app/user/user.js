angular.module("users").factory("User", function($http){
	var user = {
		mail : "",
		name : ""
	}

	user.test = function(){
		(function(_this){
			$http.get('api.coop.fr/api/ping').then(function(response){
				alert('OUI');
			}, function(response){
				alert("Une erreur s'est produite durant la récupération du panier");
			});
		})
	};

});
