import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const goodHandler =()=>{
    setGood(good +1);
  }
  const neutralHandler =()=>{
    setNeutral(neutral +1);
  }
  const badHandler =()=>{
    setBad(bad +1);
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <button onClick={goodHandler}> Good</button>
      <button onClick={neutralHandler}> Neutral</button>
      <button onClick={badHandler}> Bad</button>
      <p> Good: {good} </p><br/>
      <p> Neutral: {neutral} </p><br/>
      <p> Bad: {bad} </p><br/>
    </div>
  )
}

export default App
