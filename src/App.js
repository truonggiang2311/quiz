import logo from "./logo.svg";
import "./App.css";
import {QUESTION} from "./QUESTION"
import { useState, useRef } from "react";

const TIME_LIMIT = 10;

function App() {
  const [questions, setQuestions] = useState(QUESTION);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timer, setTimer] = useState(TIME_LIMIT);
  const [trueFalse, setTrueFalse] = useState("");
  const [countTrue, setCountTrue] = useState(0);
  const [countFalse, setCountFalse] = useState(0);
  const [disabled, setDisabled] = useState(false);
  // const refTimer = useRef(null);

  function startGame() {
    const interval = setInterval(() => {
      console.log("run interval", timer);
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else{
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);
    // refTimer.current = interval;
    setDisabled(true);
  }
  const question = questions[currentQuestionIdx];


  // function nextQuestion() {
  //   if (currentQuestionIdx < questions.length){
  //     setCurrentQuestionIdx(currentQuestionIdx + 1);
  //     setQuestionNumber(questionNumber + 1);
  //     setTimer(10);
  //     setTrueFalse("");

  //     const interval = setInterval(() => {
  //       // console.log("run interval", timer);
  //       setTimer((prevTimer) => {
  //         console.log(prevTimer);
  //         if (prevTimer > 0) {
  //           return prevTimer - 1;
  //         } else {
  //           clearInterval(interval);
  //           return 0;
  //         }
  //       });
  //     }, 1000);
  //   } 
    // else{
    //  setCurrentQuestionIdx(0);
    //  setQuestionNumber(1);
    // }
  // }

  function autoNextQuestion(){
    if(timer==0 && currentQuestionIdx < questions.length){
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setQuestionNumber(questionNumber + 1);
      setTimer(10);
      setTrueFalse("");
      setCountFalse(countFalse + 1);
    } 
    else if(currentQuestionIdx == questions.length){
      // setCurrentQuestionIdx(0);
      // setQuestionNumber(1);
      // setTimer(0);
    }
  }
  autoNextQuestion();

  function chooseA(){
    if(questions[currentQuestionIdx].answer1===questions[currentQuestionIdx].correct){
      setTrueFalse("true");
      setCountTrue(countTrue + 1);
      setTimeout(function(){
        setCurrentQuestionIdx(currentQuestionIdx + 1);
        setQuestionNumber(questionNumber + 1);
        setTimer(10);
        setTrueFalse("")
      },1000)
      
    }
    else {setTrueFalse("false");
          setCountFalse(countFalse + 1);
          setTimeout(function(){
            setCurrentQuestionIdx(currentQuestionIdx + 1);
            setQuestionNumber(questionNumber + 1);
            setTimer(10);
            setTrueFalse("")
          },1000)
          }
  }
  function chooseB(){
    if(questions[currentQuestionIdx].answer2===questions[currentQuestionIdx].correct){
      setTrueFalse("true");
      setCountTrue(countTrue + 1);
      setTimeout(function(){
        setCurrentQuestionIdx(currentQuestionIdx + 1);
        setQuestionNumber(questionNumber + 1);
        setTimer(10);
        setTrueFalse("")
      },1000)
    }
    else{
      setTrueFalse("false");
      setCountFalse(countFalse + 1);
      setTimeout(function(){
        setCurrentQuestionIdx(currentQuestionIdx + 1);
        setQuestionNumber(questionNumber + 1);
        setTimer(10);
        setTrueFalse("")
      },1000)
    } 
  }
  function chooseC(){
    if(questions[currentQuestionIdx].answer3===questions[currentQuestionIdx].correct){
      setTrueFalse("true");
      setCountTrue(countTrue + 1);
      setTimeout(function(){
        setCurrentQuestionIdx(currentQuestionIdx + 1);
        setQuestionNumber(questionNumber + 1);
        setTimer(10);
        setTrueFalse("")
      },1000)
    }
    else {
      setTrueFalse("false");
      setCountFalse(countFalse + 1);
      setTimeout(function(){
        setCurrentQuestionIdx(currentQuestionIdx + 1);
        setQuestionNumber(questionNumber + 1);
        setTimer(10);
        setTrueFalse("")
      },1000)
    }
  }
  function chooseD(){
    if(questions[currentQuestionIdx].answer4===questions[currentQuestionIdx].correct){
      setTrueFalse("true");
      setCountTrue(countTrue + 1);
      setTimeout(function(){
        setCurrentQuestionIdx(currentQuestionIdx + 1);
        setQuestionNumber(questionNumber + 1);
        setTimer(10);
        setTrueFalse("")
      },1000)
    }
    else{
      setTrueFalse("false");
      setCountFalse(countFalse + 1);
      setTimeout(function(){
        setCurrentQuestionIdx(currentQuestionIdx + 1);
        setQuestionNumber(questionNumber + 1);
        setTimer(10);
        setTrueFalse("")
      },1000)
    } 
  }
  function playAgain(){
    setCurrentQuestionIdx(0);
    setQuestionNumber(1);
    setTimer(10)
    setCountTrue(0);
    setCountFalse(0);
    setDisabled(true);
    // clearInterval(refTimer);
  }

  if(currentQuestionIdx == questions.length){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Finish</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={playAgain}>Play again</button>
          <div>
            <h3>True: {countTrue}; False: {countFalse};</h3>
          </div>
        </header>
      </div>
    )
  } else return (
    <div className="App">
      <header className="App-header">
        <h1>{timer}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={startGame} disabled={disabled}>start</button>
        <div>
          <h3>T/F: {trueFalse}</h3>
          <h3>Question {questionNumber}: {question.question1}</h3>
          <ol>
            <li className="answer" value = "1" onClick={chooseA}>{question.answer1}</li>
            <li className="answer" onClick={chooseB}>{question.answer2}</li>
            <li className="answer" onClick={chooseC}>{question.answer3}</li>
            <li className="answer" onClick={chooseD}>{question.answer4}</li>
          </ol>
        </div>
      </header>
    </div>
  );
}

export default App;
