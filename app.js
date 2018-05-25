<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
var number = 60;
    var intervalId;
    var answersCorrect = 0
    var answersIncorrect = 0

            



       
    $("#playbtn").on("click",run);

    function run(){
        intervalId = setInterval(decrement, 1000);
    }
    function decrement(){
        number--;

      $("#show-timer").html("<h2>" + number + "</h2>");
      $("#questions").html

      if (number === 0) {

        stop();

        alert("Time Up!");

      }
    }
    function stop() {

clearInterval(intervalId);

}
    
$("#answer1a").on("click",getAnswer1a)
function getAnswer1a() {
  questionOne = true 
  console.log(questionOne);
}
  $("#answer1b").on("click",getAnswer1b)
function getAnswer1b() {
  questionOne = false 
  console.log(questionOne);
}   
$("#answer2a").on("click",getAnswer2a);
function getAnswer2a() {
  questionTwo = true 
  console.log(questionTwo);
}  ;    
$("#answer2b").on("click",getAnswer2b);
function getAnswer2b() {
  questionTwo = false
  console.log(questionTwo);
}  ;    
$("#answer3a").on("click",getAnswer3a);
function getAnswer3a() {
  questionThree = true 
  console.log(questionThree);
}  ;
$("#answer3b").on("click",getAnswer3b);
function getAnswer3b() {
  questionThree = false
  console.log(questionThree);
}  ;
$("#answer4a").on("click",getAnswer4a);
function getAnswer4a() {
  questionFour = true 
  console.log(questionFour);
}  ;
$("#answer4b").on("click",getAnswer4b);
function getAnswer4b() {
  questionFour = false 
  console.log(questionFour);
}  ;
$("#answer5a").on("click",getAnswer5a);
function getAnswer5a() {
  questionFive = true 
  console.log(questionFive);
}  ;

$("#answer5b").on("click",getAnswer5b);
function getAnswer5b() {
  questionFive = false 
  console.log(questionFive);
}  ;

$("#answer6a").on("click",getAnswer6a);
function getAnswer6a() {
  questionSix = true 
  console.log(questionSix);
}  ;

$("#answer6b").on("click",getAnswer6b);
function getAnswer6b() {
  questionSix = false
  console.log(questionSix);
}  ; 
 
$("#answer7a").on("click",getAnswer7a);
function getAnswer7a() {
  questionSeven = true 
  console.log(questionSeven);
}  ; 
$("#answer7b").on("click",getAnswer7b);
function getAnswer7b() {
  questionSeven = false 
  console.log(questionSeven);
}  ; 
$("#answer8a").on("click",getAnswer8a);
function getAnswer8a() {
  questionEight = true 
  console.log(questionEight);
}  ;
$("#answer8b").on("click",getAnswer8b);
function getAnswer8b() {
  questionEight = false
  console.log(questionEight);
}  ;
$("#answer9a").on("click",getAnswer9a);
function getAnswer9a() {
  questionNine = true
  console.log(questionNine);
}  ;
$("#answer9b").on("click",getAnswer9b);
function getAnswer9b() {
  questionNine = false
  console.log(questionNine);
}  ;
$("#answer10a").on("click",getAnswer10a);
function getAnswer10a() {
  questionTen = true 
  console.log(questionTen);
}  ;
$("#answer10b").on("click",getAnswer10b);
function getAnswer10b() {
  questionTen = false
    console.log(questionTen);
}  ;

    </script>