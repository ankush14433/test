var app=angular.module("myApp1",['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		resolve: {
			"check": function($location,$rootScope){
				if (!$rootScope.backstatus) {
					console.log($rootScope.backbtn);
					console.log($rootScope.backstatus);
					$location.path('/');
				}
				else if($rootScope.backbtn!=$location.absUrl()){
					console.log($rootScope.backbtn);
					console.log($location.absUrl());
					console.log($rootScope.backstatus);
					alert("you cannot press backbtn");
					$location.path('/Game');
					console.log($rootScope.backbtn);
					console.log($location.absUrl());
					console.log($rootScope.backstatus);

				}
			}
		},
		templateUrl: 'format.html'
	})
	.when('/registration', {
            templateUrl: 'registration.html',
            // controller: 'RegisterCtrl'
        })
	.when('/Details', {
            templateUrl: 'Details.html'
            // controller: 'RoutingController'
        })
		.when('/registration/:username', {
            templateUrl: 'registration.html',
            // controller: 'RegisterCtrl'
        })
	.when('/Game',{
		resolve: {
			"check": function($location,$rootScope){
				if (!$rootScope.loggedIn) {
					$location.path('/');
				}
			}
		},
		templateUrl:'Game.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller('loginControl',['$scope','$location','$rootScope','$http',function($scope,$location,$rootScope,$http){
		$scope.register=function(){
			$location.path('/registration');
	}

		$scope.viewUser=function(){
			$location.path('/Details');		
		}

	$scope.login=function(){
//		$rootScope.uname=$scope.username;
//		$rootScope.pswd=$scope.password;
		$http.get('./database.json')
		.then(function(response){
		var persondetails=response.data.records;
		console.log("DTA="+JSON.stringify(persondetails));
		// 	if($scope.username && $scope.password)
		// 	{	
		// 		for(var i in persondetails) {
		// 		if((persondetails[i].Name==$scope.username) && (persondetails[i].password==$scope.password))
		// 		{
		// 			console.log(persondetails[i]);
		// 			console.log($scope.username);
		// 			console.log($scope.password);
		// 			$rootScope.loggedIn = true;
		// 			$location.path('/Game');
		// 			$rootScope.backbtn = $location.absUrl();
		// 			$rootScope.backstatus = true;
		// 			break;
		// 		}
		// 	else
		// 		{	
		// 			continue;

		// 		}
		// }
		if(persondetails && persondetails.length>0){
				for(var i in persondetails) {

				if((persondetails[i].Name==$scope.username) && (persondetails[i].password==$scope.password))
				{
					console.log(persondetails[i]);
					console.log($scope.username);
					console.log($scope.password);
					$rootScope.loggedIn = true;
					$location.path('/Game');
					$rootScope.backbtn = $location.absUrl();
					$rootScope.backstatus = true;
					break;
				}
			else
				{	
					continue;

				}
		}
		if(!$rootScope.loggedIn){
			alert("Please enter valid details");
			}

		}
		})
	}

}]);
angular.module("CombineModule", ["myApp1", "myApp", "detailapp","RegisterUser"]);
