var app3=angular.module('RegisterUser',[]);
app3.controller('RegisterCtrl', ['$scope','$http','$location','$rootScope','$routeParams',function($scope,$http,$location,$rootScope,$routeParams) {
	console.log($rootScope.perdetails);
	$scope.userRegistered = false;
    $scope.inputType = 'password';
	$scope.user = {
		username:'',
		password:'',
		name:'',
		company:'',
		street:'',
		city:'',
		state:'',
		zipcode:'',
		email:'',
		gender:'',
		phone:'',
		usertype:'',
		inquiry:''
	};    
	if ($routeParams.username) {
		console.log($rootScope.perdetails);
		var param1= $routeParams.username;
		var ar = [];
		for(item in $rootScope.perdetails){
    		ar.push($rootScope.perdetails[item]);
		 }
		 console.log(ar.length);
		if(ar && ar.length>0){
				$scope.result=ar.filter(perdetail => perdetail.username==param1)
				$scope.user = $scope.result[0]
				console.log($scope.user);
		}
	}
	else{
    $scope.registerUser= function(){
            $http.post('https://dummy-62a28.firebaseio.com/data.json',$scope.user)
            .then(function (data, status, headers) {
                $scope.ServerResponse = data;
                console.log($scope.ServerResponse);
            });
            $scope.reset();
        };	
    }
    $scope.showPassword = function(){
          if ($scope.inputType == 'password')
          		$scope.inputType = 'text';
          else
          		$scope.inputType = 'password';
          };
      $scope.reset = function () {
    $scope.user = {
		username:'',
		password:'',
		name:'',
		company:'',
		street:'',
		city:'',
		state:'',
		zipcode:'',
		email:'',
		gender:'',
		phone:'',
		usertype:'',
		inquiry:''
	};     
}
}]);
