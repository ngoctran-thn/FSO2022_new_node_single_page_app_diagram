

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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1 ={part1.name} exc1={part1.exercises} 
      part2 ={part2.name} exc2={part2.exercises} part3 ={part3.name} exc3={part3.exercises}/>
      
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>

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
