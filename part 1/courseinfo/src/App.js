

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
const sum=(p1,p2,p3)=>{
  return p1+p2+p3
}

const Total = (props) =>{
  const result = sum(props.object.parts[0].exercises, props.object.parts[1].exercises, props.object.parts[2].exercises)
  return (
    <p>Total of  {result} exercises</p>
  )
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
const Course=(props)=>{
  return(
    <div>
      <Header object={props.course}/>
      <Content object={props.course}/>
      <Total object={props.course}/>
    </div>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course}/>
    </div>
  );
}


export default App;
