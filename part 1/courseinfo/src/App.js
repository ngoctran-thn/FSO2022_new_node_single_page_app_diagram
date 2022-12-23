

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
    <p>{props.arr[0].exercises}+{props.arr[1].exercises}+ {props.arr[2].exercises}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content arr={parts}/>
      <Total arr={parts}/>
    </div>
  );
}
const Content = (props) => {
  
  return (
    <div>
    <Part part={props.arr[0].name} exc={props.arr[0].exercises}/>
    <Part part={props.arr[1].name} exc={props.arr[1].exercises}/>
    <Part part={props.arr[2].name} exc={props.arr[2].exercises}/>
    </div>
  )
  }

export default App;
