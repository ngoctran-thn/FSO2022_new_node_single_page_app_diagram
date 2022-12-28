const Header = (props) => {
  return <p>{props.object.name}</p>;
};
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exc}
    </p>
  );
};

const Total = (props) => {
  const subjects = props.object.parts;

  // const result = subjects.reduce((acc, cur) => {
  //   return acc + cur.exercises;
  // }, 0);

  // const result = subjects.reduce((acc, cur) => acc + cur.exercises, 0);

  const result = subjects
    .map((s) => s.exercises)
    .reduce((acc, cur) => acc + cur);

  return <p>Total of {result} exercises</p>;
};
const Content = (props) => {
  return (
    <div>
      {props.object.parts.map((parts) => (
        <Part key={parts.id} part={parts.name} exc={parts.exercises} />
      ))}
    </div>
  );
};
const Course = (props) => {
  return (
    <div>
      <Header object={props.course} />
      <Content object={props.course} />
      <Total object={props.course} />
    </div>
  );
};
const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
