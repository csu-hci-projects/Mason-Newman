var testquiz = [
    {
        question:"Remote data access, storage, software access, and collaboration techniques are all aspects of __________ computing.",
        answers: {
            a: "Cloud",
            b: "Physical",
            c: "Variable"
        },
        correctAnswer: "a"
    },
    {
        question: "A(n) _________ provides a secure, encrypted connection between remote users and local area networks.",
        answers: {
            a: "Remote desktop connection",
            b: "Virtual private network",
            c: "SSL encryption",
            d: "Virtual machine"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of these is done by FTP",
        answers: {
            a: "Encyrption over transit",
            b: "Uploading and downloading files",
            c: "Monitoring network activity",
            d: "Connecting to web servers"
        },
        correctAnswer: "b"
    },
    {
        question: "What is a common markup language that uses codes called tags to define the format and organization of web pages",
        answers: {
            a: "CSS",
            b: "js",
            c: "HTML",
            d: "PHP"
        },
        correctAnswer: "c"   
    }
];

var quiz1 = [
    {
        question: "What is a command line interface (CLI)?",
        answers: {
            a: "It converts code into an executable object",
	        b: "A prompt to enter text commands",
	        c: "It displays images, icons, and buttons",
	        d: "A storage for a programs methods"
        },
        correctAnswer: "b",
        rationale: "The command line accepts a command in a line. Typing help usually lets you know what commands you can use."
    },
    {
        question: "Which of these lines of code were not included in the hello.c program?",
        answers: {
            a: "#include stdio.h",
	        b: "return 0;",
	        c: "int main(void)",
	        d: "printf(\“Hello world\”);"
        },
        correctAnswer: "b",
        rationale: "We don’t need a return statement, but in answer c, the return type is “int”. So this line isn’t necessary, but doesn’t hurt either."
    },
    {
        question: "Which of these can be produced by a function?",
        answers: {
            a: "Side effects (ie print)",
	        b: "Return values",
	        c: "Both of these",
	        d: "Neither of these"
        },
        correctAnswer: "c",
        rationale: "Functions can produce standard output or can do some small action for something else."
    },
    {
        question: "What does IDE stand for?",
        answers: {
            a: "Interior Designated Environment",
	        b: "Isolated Developer Engine",
	        c: "Integrated Development Environment",
	        d: "Intelligent Development Engine"
        },
        correctAnswer: "c",
        rationale: "We use an IDE to develop code in the same environment we compile it. That’s why it’s integrated."
    },
    {
        question: "What do we use escape characters for in printf?",
        answers: {
            a: "Generate a newline",
	        b: "Exit the program",
	        c: "Enter a function",
	        d: "Print to the command line"
        },
        correctAnswer: "a",
        rationale: "Escape characters are denoted by a backslash . We use these to add characters we otherwise couldn’t use in code. We can also use them for additional functions like newline backslashn"
    },
    {
        question: "True or False: Computers only understand binary?",
        answers: {
            a: "True",
 	        b: "False"
        },
        correctAnswer: "a",
        rationale: "Computers can’t use human logic. Therefore we need a compiler to convert our language to computer language, which is binary."
    }
];

var quiz2 = [
    {
        question: "What command in the terminal compiles hello.c in the CS50 IDE?",
        answers: {
           a: "Compile",
	       b: "Make",
	       c: "Convert",
	       d: "toBinary()"
        },
        correctAnswer: "b"
    },
    {
        question: "What does a compiler output?",
        answers: {
           a: "Machine code",
	       b: "Raw C code",
	       c: "Hex code",
	       d: "Unary code"
        },
        correctAnswer: "a"
    },
    {
        question: "What do we call small actions we can use in our programs that use arguments?",
        answers: {
            a: "Classes",
            b: "Functions",
            c: "Structures",
            d: "Libraries"
        },
        correctAnswer: "b"
    },
    {
        question: "True or False: We need to include a semicolon after every line of code?",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        question: "What does this line of code accomplish: #include stdio.h",
        answers: {
            a: "Sets the language to C",
	       b: "Adds studio effects to output",
	       c: "Include a header file/library in the program",
	       d: "It changes nothing"
        },
        correctAnswer: "c"
    },
    {
        question: "When using printf, what do we use as a placeholder?",
        answers: {
            a: "$s",
	       b: "%s",
	       c: "&s",
	       d: "*s"
        },
        correctAnswer: "b"
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var quiznumber = 1;
var quiz1correct = 0;
var quiz2correct = 0;
var nextbutton = document.getElementById("nextbutton");
nextbutton.style.display = "none";

if (quiznumber == 1)generateQuiz(quiz1, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
      
      answers = [];

      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter] + "\n"
          + '</label>' + '<br>'
        );
      }

      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }
    quizContainer.innerHTML = output.join('');
}


  function showResults(questions, quizContainer, resultsContainer){
    
    
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    
    var userAnswer = '';
    var numCorrect = 0;
    var incorrect = [];
    
    
    for(var i=0; i<questions.length; i++){

      
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      
      if(userAnswer===questions[i].correctAnswer){
        
        numCorrect++;
        
        answerContainers[i].style.color = 'lightgreen';
      }
      
      else{
        
        answerContainers[i].style.color = 'red';
        answerContainers[i].innerHTML += "Correct answer: " + questions[i].correctAnswer + ". " + questions[i].rationale;
        incorrect.push(userAnswer);
      }
    }

    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + '\n';
      if (quiznumber == 1) quiz1correct += numCorrect;
      else{
        quiz2correct += numCorrect;
        alert("1:" + quiz1correct + " 2:" + quiz2correct);  
      } 
      //
      numCorrect = 0;
  }

  showQuestions(questions, quizContainer);
  
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
    quiznumber++;
      submitButton.style.display = "none";
    if(quiznumber <= 2) nextbutton.style.display = "block";
      //setTimeout(generateNewQuiz(), 10.0*1000);
      //quizContainer.innerHTML = "";
      //generateQuiz(testquiz, quizContainer, resultsContainer, submitButton);
      //alert(quiznumber);
      //var nextbutton = document.getElementById("nextbutton");
      //var next = document.createElement("button");
      //next.innerHTML = "Next Page";
      //next.id = "next";
      ////document.body.appendChild(next);
      //nextbutton.appendChild(next);
  }
  
  nextbutton.onclick = function(){
      //alert("Please click continue when you are ready");
      quizContainer.innerHTML = "";
      resultsContainer.innerHTML = "";
      generateQuiz(quiz2, quizContainer, resultsContainer, submitButton);
      nextbutton.style.display = "none";
      var quizhead = document.getElementById("quizheader");
      quizhead.innerHTML = "Quiz 2"
      submitButton.style.display = "block";
      //alert(quiznumber);
      //var nextbutton = document.getElementById("nextbutton");
      //var next = document.createElement("button");
      //next.innerHTML = "Next Page";
      //next.id = "next";
      ////document.body.appendChild(next);
      //nextbutton.appendChild(next);
  }

}