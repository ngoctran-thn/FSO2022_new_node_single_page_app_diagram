const Header = (props) => {
  return <h2>{props.name}</h2>;
};
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exc}
    </p>
  );
};

const Total = (props) => {
  const subjects = props.parts;

  // const result = subjects.reduce((acc, cur) => {
  //   return acc + cur.exercises;
  // }, 0);

  // const result = subjects.reduce((acc, cur) => acc + cur.exercises, 0);

  const result = subjects
    .map((s) => s.exercises)
    .reduce((acc, cur) => acc + cur);

  return <h4>Total of {result} exercises</h4>;
};
const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.id} part={part.name} exc={part.exercises} />
      ))}
    </div>
  );
};
const AllCourse =(props)=>{
  return(
    <div>
      {props.courses.map(course=>(
        <Course key={course.id} name={course.name} parts={course.parts}/>
      ))}
    </div>
  )
}
const Course = (props) => {
  return (
    <div>
      <Header name={props.name}/>
      <Content parts={props.parts}/>
      <Total parts={props.parts}/>
      
      
    </div>
  );
};
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <AllCourse courses={courses} />
    </div>
  );
};

export default App;
