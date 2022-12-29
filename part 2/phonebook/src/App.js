import { useState } from "react";

const Numbers = (props) => {
  return <p>{props.name}</p>;
};
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const addNameHandler = () => {
    const newPersons = [...persons];
    newPersons.push({ name: newName });
    setPersons(newPersons);
    setNewName("");
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      name: <input value={newName} onChange={handleNameChange} />
      <button type="submit" onClick={addNameHandler}>
        add
      </button>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Numbers key={person.name} name={person.name} />
        ))}
      </ul>
      ...
    </div>
  );
};

export default App;
