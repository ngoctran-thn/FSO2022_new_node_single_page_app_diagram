
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
  
const Course = (props) => {
    return (
      <div>
        <Header name={props.name}/>
        <Content parts={props.parts}/>
        <Total parts={props.parts}/>
        
        
      </div>
    );
  };
const CourseComponent =(props)=>{
    return(
      <div>
        {props.courses.map(course=>(
          <Course key={course.id} name={course.name} parts={course.parts}/>
        ))}
      </div>
    )
  }


export default CourseComponent;