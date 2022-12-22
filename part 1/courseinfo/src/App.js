import logo from './logo.svg';
import './App.css';

const Header = (props) =>{
  return (
    <p>(props.course)</p>
  )
}
const Part = (props) =>{
  return (
    <p>(props.part) (props.exc)</p>
  )
}



const Total = (props) =>{
  return (
    <p>(props.ex1)+(props.ex2)+ (props.ex3)</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  
  return (
    <div>
      <Header course={course}/>
      
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>

    </div>
  );
}
const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
    <Part part={part1} exc={exercises1}/>
    <Part part={part2} exc={exercises2}/>
    <Part part={part3} exc={exercises3}/>
    </div>
  )
  }

export default App;
