import { useState } from "react";

const average = (good, neutral, bad) => {
  return (good - bad) / (good + neutral + bad);
};
const positive = (good, neutral, bad) => {
  return (good / (good + neutral + bad))*100;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
const StatisticsTable = (props) => {
  return (
    <table>
      <tr>
        <td>{props.text1}</td>
        <td>{props.good}</td>
      </tr>
      <tr>
        <td>{props.text2}</td>
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>{props.text3}</td>
        <td>{props.bad}</td>
      </tr>
      <tr>
        <td>{props.text4}</td>
        <td>{average(props.good, props.neutral, props.bad)}</td>
      </tr>
      <tr>
        <td>{props.text5}</td>
        <td>{positive(props.good, props.neutral, props.bad)}%</td>
      </tr>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const goodHandler = () => {
    setGood(good + 1);
  };
  const neutralHandler = () => {
    setNeutral(neutral + 1);
  };
  const badHandler = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={goodHandler} text="good" />
      <Button onClick={neutralHandler} text="neutral" />
      <Button onClick={badHandler} text="bad" />
      <h2>Statistics</h2>
      <StatisticsTable
        text1="good"
        text2="neutral"
        text3="bad"
        text4="average"
        text5="positive"
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
};

export default App;
