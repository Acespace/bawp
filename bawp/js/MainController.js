



app.controller('MainController', ['$scope', function($scope){



	$scope.fblogin = function(){


		var ref = new Firebase("https://bawp.firebaseio.com/");
		ref.authWithOAuthPopup("facebook", function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData);
			  }
		});




	};



}]);



