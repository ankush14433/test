var app4=angular.module('detailapp',[]);
app4.controller('detailsctrl',['$scope','$http','$location','$rootScope',function($scope,$http,$location,$rootScope){
	$http.get('https://dummy-62a28.firebaseio.com/data.json')
		.then(function(response){
			console.log(response.data);
			console.log(Object.values(response.data))
		$rootScope.perdetails=response.data;
		console.log(Array.isArray($rootScope.perdetails));
		console.log(typeof $rootScope.perdetails);
	})	
	$scope.view=function(username){
		$location.path('/registration/'+ username);
		}

	$scope.delete=function(name){
		$http.put('https://dummy-62a28.firebaseio.com/data.json',Object.values($rootScope.perdetails).filter(perdet => perdet.username!=name))
		.then(function (response) {
         	$rootScope.perdetails=response.data;
	})
	}
}]);	
