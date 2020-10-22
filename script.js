
$(document).ready(function () {
    var buttoncard = $("#button-card");
    var startbutton = $("#start-button");
    var quiz = $("#quizcard");
    //questions array with mutiple choice and answers
    var questions = [
        
        {
            options:
              "The condition in an if / else statement is enclosed within ____.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: "parentheses"
        },
        {
            options:
              "String values must be enclosed within ____ when being assigned to variables.",
             choices : ["commas", "curly brackets", "quotes", "parentheses"],
             answer: "quotes"
        },
        {
            options:
              "A very useful tool for used during development and debugging printing content to the debugger is:",
            choices: ["JavaScript", "terminal / bash", "for loops", "console log"],
            answer: "console.log"
        },
        
    ];
    console.log(questions);
    //the startbutton begins the quiz
    startbutton.on("click", function (){
        buttoncard.hide();
        startGame();
    });
    //the function for when the quiz starts
    function startGame(){
        quiz.show();
        
        $("#quizcard").append($("<h1>" + questions[0].options + "</h1>" ))
        for(var i = 0; i < questions[0].choices.length; i++){
            var choicediv = $("<div class='center-text'>");
            var choicebutton = $("<button class='center-text'>");
            
           
            choicebutton.text(questions[0].choices[i]);
            choicebutton.attr("data-choice",questions[0].choices[i]);
            choicediv.append(choicebutton);
            $("#quizcard").append(choicediv)


        }

    }

    

     
});




    

