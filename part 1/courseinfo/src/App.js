

const Header = (props) =>{
  return (
  <p>{props.course}</p> 
  )
    
  
  
}
const Part = (props) =>{
  return (
    <p>{props.part} {props.exc}</p>
  )
}

const Total = (props) =>{
  return (
    <p>{props.ex1}+{props.ex2}+ {props.ex3}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course}/>
      <Content part1 ={part1} exc1={exercises1} 
      part2 ={part2} exc2={exercises2} part3 ={part3} exc3={exercises3}/>
      
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>

    </div>
  );
}
const Content = (props) => {
  
  return (
    <div>
    <Part part={props.part1} exc={props.exc1}/>
    <Part part={props.part2} exc={props.exc2}/>
    <Part part={props.part3} exc={props.exc3}/>
    </div>
  )
  }

export default App;
