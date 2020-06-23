// Questions array with answers: object properties 

let questions = [{
 question: "2+2 = n",
 answers: {
  a: '5',
  b: '9',
  c: '10',
  d: '4',
 },
 correctAnswer: 'd'
},
{
 question: "2+3 = n",
 answers: {
  a: '5',
  b: '9',
  c: '10',
  d: '4',
 },
 correctAnswer: 'a',
},
{
 question: "2+4 = n",
 answers: {
  a: '5',
  b: '6',
  c: '10',
  d: '4',
 },
 correctAnswer: 'b',
},
{
 question: "2+12 = n",
 answers: {
  a: '5',
  b: '9',
  c: '14',
  d: '4',
 },
 correctAnswer: 'c',
}];

// helper functions : to show quiz, submit answers, and show results

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

 function showQuestions(questions, quizContainer) {
   // postResponse is the place to store the answers choices
  let postResponse = [];
  let answers;

  for (i = 0; i < questions.length; i++) {
    //resets the list of answers
   answers=[];
   // for each available answer to this question add an html radio button
   for( letter in questions[i].answers){
 
    answers.push(
      '<label>'
      + '<input type ="radio" name = "question' + i +'" value="'+letter+'">'
      + letter +': '
      + questions[i].answers[letter]
      + '</label>'
    );
  }

//question and it's answers will push to resultsContainer
 postResponse.push(
  '<div class="question">' + questions[i].question + '</div>'
  + '<div class ="answers">' + answers.join(' ') + '</div>'
  );
 }
 quizContainer.innerHTML = postResponse.join(' ');
}

 function showResults(questions, quizContainer, resultsContainer) {
   //queries DOM for all answer containers from quiz
  let answerContainers = quizContainer.querySelectorAll('.answers');
  // track users and answers
  let playerPick = '';
  let correctPick =' ';

  for (i=0;i<questions.length; i++){

    playerPick =(answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

    if(playerPick === questions[i].correctPick){
      //correct answers will increase by 1 & turn green, red for wrong or blank
      numCorrect++;
      answerContainers[i].style.color ='lightgreen';
    }else{
      answerContainers[i].style.color ='red';
    }
  } //displays # of correct answer out of total #
  resultsContainer.innerHTML= numCorrect + ' out of ' + questions.length;
 }

 showQuestions(questions, quizContainer);

 submitButton.onClick = function () {
  showResults(questions, quizContainer, resultsContainer)
 }
}

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

generateQuiz(questions, quizContainer, resultsContainer, submitButton);