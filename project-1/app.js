var app1=angular.module("myApp",[]);
app1.controller("Gamecontoller",['$scope',function($scope){

var words=["rat","cat","bat","mat","lion","Tiger"];
$scope.incorrectlettersChosen = [];
$scope.correctlettersChosen = [];
$scope.noofguess = 6;
$scope.displayword = '';
$scope.input = {
	letter : ''
}

var selectRandomWord = function(){
	var index= Math.round(Math.random()*words.length);
	return words[index];
}

var newGame = function(){
	$scope.incorrectlettersChosen = [];
	$scope.correctlettersChosen = [];
	$scope.noofguess = 6;
	$scope.displayword = '';

	selectedWord=selectRandomWord();
	var tempDisplayWord='';
	for (var i = 0; i < selectedWord.length; i++) {
		tempDisplayWord+='*';
	}
	$scope.displayword=tempDisplayWord;
}

 $scope.letterCheck = function(){	
 	for (var i = 0; i <$scope.correctlettersChosen.length; i++) {
 		if($scope.correctlettersChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
 			$scope.input.letter="";
 			return;
 		}
 	}
 	for (var i = 0; i < $scope.incorrectlettersChosen.length; i++) {
 		if($scope.incorrectlettersChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
 			$scope.input.letter="";
 			return;
 		}
 	}
 	var correct = false;
 	for (var i = 0; i < selectedWord.length; i++) {
 	if (selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()){
 		$scope.displayword = $scope.displayword.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayword.slice(i+1);
 		correct=true;
 	}
 	}
 	if (correct) {
 		$scope.correctlettersChosen.push($scope.input.letter.toLowerCase());
 	}
 	else
 	{
 		$scope.noofguess--;
 		$scope.incorrectlettersChosen.push($scope.input.letter.toLowerCase());
 	}
 	$scope.input.letter='';
 	if($scope.noofguess==0){
 		alert("you lost");
 		newGame();
 	}
 	if ($scope.displayword.indexOf('*')==-1) {
 		alert("you Won");
 		newGame();
 	}


}
newGame();
}]);