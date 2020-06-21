// Questions array with answers: object properties 

let questions = [{
 question: "2+2 = n",
 answers: {
  a: '5',
  b: '9',
  c: '10'
  d: '4'
 },
 correctAnswer: 'd'
},
{
 question: "2+3 = n",
 answers: {
  a: '5',
  b: '9',
  c: '10'
  d: '4'
 },
 correctAnswer: 'a'
},
{
 question: "2+4 = n",
 answers: {
  a: '5',
  b: '6',
  c: '10'
  d: '4'
 },
 correctAnswer: 'b'
},
{
 question: "2+12 = n",
 answers: {
  a: '5',
  b: '9',
  c: '14'
  d: '4'
 },
 correctAnswer: 'c'
}];

// helper functions : to show quiz, submit answers, and show results

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

 function showQuestions(questions, quizContainer) {
  let postResponse = [];
  let answers;

  for (i = 0; i < questions.length; index++) {
   answers=[];
   
   for( letter in questions[i].answers){
    answers.push('<label>'+'<input type ="radio" name = "question' + i + 

    )
  }
 }

 function showResults(questions, quizContainer, resultsContainer) {

 }

 showQuestions(questions, quizContainer);

 submitButton.onClick = function () {
  showResults(questions, quizContainer, resultsContainer)
 }
}