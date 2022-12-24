import { useState } from 'react'

const Statistics =(props)=>{
  let feedback
   
  if((props.good + props.neutral + props.bad)===0){
    feedback='No feedback is given'
  }else{
    feedback=props.good + props.neutral + props.bad
  }
  return(
    <div>
      <p>Total feedback: {feedback}</p>
    </div>
  )
}

const Button =(props)=>{
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const StatisticsLine =(props) =>{
return(
  <p>{props.text} : {props.value}</p>
)
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
      <Button 
        onClick={goodHandler}
        text='good'
      />
      <Button 
        onClick={neutralHandler}
        text='neutral'
      />
      <Button 
        onClick={badHandler}
        text='bad'
      />
      <h2>Statistics</h2>
      <StatisticsLine text="good" value={good}/>
      <StatisticsLine text="neutral" value={neutral}/>
      <StatisticsLine text="bad" value={bad}/>
    </div>
  )
}

export default App
