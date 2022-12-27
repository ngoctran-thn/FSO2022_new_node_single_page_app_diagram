import { useState } from "react";
const Mostvote=(props)=>{
  const vote2 =[...props.vote];
  const max = Math.max(...vote2)
  const index = vote2.indexOf(max)
  return(
    <div>
      <p>{props.anecdotes[index]}</p>
      <p> vote: {max}</p>
    </div>
  );
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);
  const anecdotesHandler = () => {
    let value = Math.floor(Math.random() * 6);
    setSelected(value);
    console.log(value);
  };
  const voteHandler = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>current votes: {votes[selected]}</p>
      <button onClick={anecdotesHandler}> next anecdotes</button>
      <button onClick={voteHandler}> vote</button>
      <h2> Anecdotes with the most votes</h2>
      <Mostvote vote={votes} anecdotes={anecdotes}/>
    </div>
  );
};
export default App;
