const quizData = [
    {
      question: "Who was the first president of the United States?",
      options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Franklin D. Roosevelt"],
      answer: "George Washington"
    },
    {
      question: "Which ancient civilization built the Great Pyramid of Giza?",
      options: ["Egyptians", "Greeks", "Romans", "Mesopotamians"],
      answer: "Egyptians"
    },
    {
      question: "The Treaty of Versailles was signed in which year?",
      options: ["1918", "1919", "1920", "1921"],
      answer: "1919"
    },
    {
      question: "The Renaissance began in which city?",
      options: ["Rome", "Florence", "Venice", "Milan"],
      answer: "Florence"
    },
    {
      question: "The Magna Carta was signed by which king?",
      options: ["King John", "King Henry VIII", "King Edward I", "King Richard the Lionheart"],
      answer: "King John"
    },
    {
      question: "The Rosetta Stone was discovered in which year?",
      options: ["1799", "1800", "1801", "1802"],
      answer: "1799"
    },
    {
      question: "The Great Fire of London occurred in which year?",
      options: ["1665", "1666", "1667", "1668"],
      answer: "1666"
    },
    {
      question: "The Berlin Wall was built in which year?",
      options: ["1960", "1961", "1962", "1963"],
      answer: "1961"
    },
    {
      question: "The first Olympic Games were held in which city?",
      options: ["Athens", "Rome", "Olympia", "Paris"],
      answer: "Olympia"
    },
    {
      question: "The Wright brothers made their first powered flight in which year?",
      options: ["1901", "1902", "1903", "1904"],
      answer: "1903"
    }
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  
  // Display the first question
  displayQuestion();
  
  // Function to display the current question
  function displayQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.textContent = option;
      optionElement.dataset.optionIndex = index;
      optionsElement.appendChild(optionElement);
    });
  }
  
  // Function to handle submit button click
  submitButton.addEventListener("click", () => {
    const selectedOption = optionsElement.querySelector("[data-option-index]");
    const
