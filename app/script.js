const questions = [
  {
    question: "Какой язык работает в браузере?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 4,
  },
  {
    question: "Что означает CSS?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correct: 2,
  },
  {
    question: "Что означает HTML?",
    answers: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: 1,
  },
  {
    question: "В каком году был создан JavaScript?",
    answers: ["1996", "1995", "1994", "все ответы неверные"],
    correct: 2,
  },
];

//Находим элементы
const headerContainer = document.querySelector("#header");
const listContainer = document.querySelector("#list");
const submitBtn = document.querySelector("#submit");

//Переменные игры
let score = 0;
let questionIndex = 0;

//Очищаем html
clearPage();
showQuestion();

function clearPage() {
  headerContainer.innerHTML = "";
  listContainer.innerHTML = "";
}

//Отображаем вопрос
function showQuestion() {
  //Вопрос
  const headerTemplate = `
    <h2 class="title">%title%</h2>
  `;
  const title = headerTemplate.replace(
    "%title%",
    questions[questionIndex]["question"]
  );
  headerContainer.innerHTML = title;

  //Варианты ответов
  let answerNumber = 1;

  for (answerText of questions[questionIndex]["answers"]) {
    const questionTemplate = `
   <li>
      <label>
         <input value="%number%" type="radio" class="answer" name="answer" />
         <span>%answer%</span>
      </label>
   </li>
   `;

    let answerHTML = questionTemplate
      .replace("%answer%", answerText)
      .replace("%number%", answerNumber);

    listContainer.innerHTML += answerHTML;
    answerNumber++;
  }
}

function checkAnswer() {
  //Находим выбранную радио кнопку
  const checkedRadio = listContainer.querySelector(
    'input[type="radio"]:checked'
  );

  //Если ответ не выбран - ничего не делаем и выходим из функции
  if (!checkedRadio) {
    return;
  }
}

submitBtn.addEventListener("click", checkAnswer);
