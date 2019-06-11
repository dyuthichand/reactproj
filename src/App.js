  import React from 'react';
  import './App.css';
  import Quizz from './Quizz.js';
  class App extends React.Component{
    constructor(){
      super()

      this.startQuiz=this.startQuiz.bind(this)
      this.state ={
        step:0
      }
    }
    startQuiz(){
fetch('https://opentdb.com/api.php?amount=10').
then(response => response.json()).then((data) =>
{
  let quizzArray = [];
  let Answers = [];
  let anserSet = [];

  let eachq,eachAnswer,eachRightAns;
for(eachq in data.results){
  
  quizzArray.push(`<div> ${data.results[eachq].question} </div>`)
}
  for(eachAnswer in data.results){
   let anserSet1 = data.results[eachAnswer].incorrect_answers + data.results[eachAnswer].correct_answer;
    ;

   anserSet.push(anserSet1)

  }
  var theset = quizzArray.concat(anserSet);

  theset.forEach((Questions,QuestionsNumber) => {
    console.log(theset)
  })

})
    .catch((error) => console.log(error))
    }
    render(){

    return (
      <div className="App container">
        <Quizz quizStart={this.startQuiz} />

      </div>
    );
    }
  }

  export default App;



  // data.results.forEach((Questions,QuestionsNumber) => {
  //   //
  //   let i;
  //   for(i in Questions.incorrect_answers){
  //     let ans=`<label><input type="radio" value=${Questions.incorrect_answers[i]} /> </label>`
  //     Answers.push(ans)
  //     //  console.log(Questions.incorrect_answers[i])
  //   }
  //   let eachQuestion=`<p> ${Questions.question}</p><div>${Questions.incorrect_answers}</div>`
  //   //  quizzArray.push(eachQuestion)
  //
  //
  // })
