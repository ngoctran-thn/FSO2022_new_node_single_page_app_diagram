

const Header = (props) =>{
  return (
  <p>{props.object.name}</p> 
  )
    
  
  
}
const Part = (props) =>{
  return (
    <p>{props.part} {props.exc}</p>
  )
}

const Total = (props) =>{
  return (
    <p>{props.object.parts[0].exercises}+{props.object.parts[1].exercises}+ {props.object.parts[2].exercises}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header object={course}/>
      <Content object={course}/>
      <Total object={course}/>
    </div>
  );
}
const Content = (props) => {
  
  return (
    <div>
    <Part part={props.object.parts[0].name} exc={props.object.parts[0].exercises}/>
    <Part part={props.object.parts[1].name} exc={props.object.parts[1].exercises}/>
    <Part part={props.object.parts[2].name} exc={props.object.parts[2].exercises}/>
    </div>
  )
  }

export default App;
