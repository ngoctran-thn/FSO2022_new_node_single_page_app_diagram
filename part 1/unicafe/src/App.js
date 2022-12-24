import { useState } from 'react'

const Statistics =(props)=>{
  return(
    <div>
      <p> Good: {props.good} </p><br/>
      <p> Neutral: {props.neutral} </p><br/>
      <p> Bad: {props.bad} </p><br/>
      <p> average: {average(props.good,props.neutral,props.bad)}</p><br/>
      <p> positive: {positive(props.good,props.neutral,props.bad)}</p><br/>
    </div>
  )
}
const average =(good,neutral,bad)=>{
  return (good-bad)/(good+neutral+bad)
}
const positive =(good,neutral,bad)=>{
  return good/(good+neutral+bad)
}

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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
