  const quesJSON =[

    {    // q1
            correctAnswer: 'Arijit',
            options: ['Darshan', 'King', 'Arijit', 'Atif Aslam'],
            question:
              "My Favorite Singer?",
          }, 
    {    
      // q2 
      correctAnswer: 'Bhopal',
      options:   ['Bhopal', 'Sagar', 'Reeva', 'Panna'],
      question:
      " capital of Madhaya Pradesh?",
    },      
    {     // q3
      correctAnswer: 'Marvel',
      options:   ['bollywood', 'Marvel', 'Tollywood', 'hollywood'],
      question:
        "My favorite Movie In ?",
    },     
    {     // q4
      correctAnswer: 'Wanda',
      options:   ['RDJ', 'Hulk', 'Captian America', 'Wanda'],
      question:
        "My favorite Marvel Charactor is?",
    },   
    {     // q5
      correctAnswer: 'Black',
      options:   ['Red', 'Orange', 'Black', 'White'],
      question:
        "My favorite Color is?",
    },     
     
  ];

     let score = 0;
    let currentQuestion = 0;
    const totalScore=quesJSON.length;
// Accessing all elements
const questionEl = document.getElementById('question');
const optionEl =  document.getElementById('options');
const scoreEl =  document.getElementById('score');
const nextEl= document.getElementById('next');
showQuestion();
nextEl.addEventListener("click",()=>{
  scoreEl.textContent=`Score:${score} /${totalScore}`;
  nextQuestion();
} );
// function showquestion
function  showQuestion(){
 //  destibuting the obj
const { 
  correctAnswer,
  options,
  question
} = quesJSON[currentQuestion]; 
  // c1
  // setting question  text content
questionEl.textContent = question;



const shuffledOptions = shuffleOptions(options);



shuffledOptions.forEach((opt)=>{
  //  creating button  and appending it to the option div 
const btn = document.createElement('button');
btn.textContent = opt;
optionEl.appendChild(btn);

// event handeling on the button 
btn.addEventListener('click',() => {
            if(opt === correctAnswer){
              score++;
            }else{
              score = score -0.25;
              }
   scoreEl.textContent= `Score:${score} /${totalScore}`;
   nextQuestion();
  
});
});
}
 // function for next question 
 function nextQuestion(){
  currentQuestion++ ;
  optionEl.textContent ='';
  if(currentQuestion>=quesJSON.length){
     questionEl.textContent="Quiz Completed !!";
   nextEl.remove();
  }else{
    showQuestion();
  }
 }
 // shuffling the options
function shuffleOptions(options) {
  for(let i = options.length - 1; i>=0; i--){
    const j = Math.floor(Math.random()* i + 1);
    [options[i],options[j]] = [
      options[j],
      options[i],
    ];
  }

  return options;

}
//shuffleOptions([1, 2, 3, 4, 5]);