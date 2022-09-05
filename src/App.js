import React, { useState, useEffect } from 'react';
import './App.css';
import QuestionAndAns from './components/QuestionAndAns';
import ReactConfetti from 'react-confetti';

const url = 'https://opentdb.com/api.php?amount=10'

function App() {

  const [data, setData] = useState([])
  const [score, setScore] = useState(0)
  const [arrIndex, setArrIndex] = useState(0)

  useEffect(() => {
    fetch(url).then(res => res.json())
      .then(data => setData(data.results))
  }, [])
  console.log(score)

  function optionSelected(isCorrect) {
    setArrIndex(arrIndex + 1)
    if (isCorrect === 'correct') {
      setScore(score + 1)
    }
  }

  return data.length > 0 ?
    (arrIndex <= data.length - 1 ?
      (<div className="quiz-container">
        <QuestionAndAns optionSelected={optionSelected} data={data[arrIndex]} />
      </div>) :
      (<div>
        <ReactConfetti />
        <h1>Quiz ended! {`Your score is ${score}`}</h1>
        <button onClick={() => window.location.reload(false)} className='replay'>Play again</button>
      </div>)
    ) : (<h1>Loading...</h1>);
}

export default App;
