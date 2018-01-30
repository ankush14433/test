function answer()  {
	var messages = ["Get Lost","Good","Excellent"];
	var images = ['img/Get_lost.gif','img/second.gif','img/first.gif'];
	var score;
	var correct = 0;
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;

	if (question1 == 'Narendra Modi') {
		correct++;
	}
	if (question2 == 'Delhi') {
		correct++;
	}
	if (question3 == 'Ram') {
		correct++;
	}

	if (correct < 1) {
		score = 0;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct > 2) {
		score = 2;
	}

	document.getElementById('after_submit').style.visibility= 'visible';

	document.getElementById('message').innerHTML= messages[score];
	document.getElementById('number_correct').innerHTML = "You got " + correct + " Questions correct"
	document.getElementById('picture').src=images[score];
}