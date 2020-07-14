function generateQuiz() {
  const output = [];
  questions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
          </label>`
      );
    }
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
    );
  });

  quizBox.innerHTML = output.join('');
}
function showResults() {
  const answerContainers = quizBox.querySelectorAll('.answers');

  let correctAnswer = 0;

  questions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      correctAnswer++;

      answerContainers[questionNumber].style.color = 'lightgreen';
    } else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  resultBox.innerHTML = `${correctAnswer} out of ${questions.length}`;
}

let quizBox = document.getElementById('quiz');
let resultBox = document.getElementById('results');
let submitBtn = document.getElementById('submitButton');

let questions = [
  {
    question: '2+2 = n',
    answers: {
      a: '5',
      b: '9',
      c: '10',
      d: '4',
    },
    correctAnswer: 'd',
  },
  {
    question: '2+3 = n',
    answers: {
      a: '5',
      b: '9',
      c: '10',
      d: '4',
    },
    correctAnswer: 'a',
  },
  {
    question: '2+4 = n',
    answers: {
      a: '5',
      b: '6',
      c: '10',
      d: '4',
    },
    correctAnswer: 'b',
  },
  {
    question: '2+12 = n',
    answers: {
      a: '5',
      b: '9',
      c: '14',
      d: '4',
    },
    correctAnswer: 'c',
  },
];

generateQuiz();

submitButton.addEventListener('click', showResults);
