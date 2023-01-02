import { useState } from "react";

const Numbers = (props) => {
  return <p>{props.name}</p>;
};
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [messgae, setMessage] = useState("");

  const addNameHandler = () => {
    if (persons.some((e) => e.name === newName)) {
      setMessage(`${newName} is already added in Phonebook`);
    } else {
      const newPersons = [...persons];
      const new1 = String(newName + " " + newNumber)
      newPersons.push({ name: new1 });
      setPersons(newPersons);
    }
    setNewName("");
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
    
      name: <input value={newName} onChange={handleNameChange} /><br/>
      Number: <input value={newNumber} onChange={handleNumberChange} /><br/>
      <button type="submit" onClick={addNameHandler}>
        add
      </button>
      <div>
        <p>{messgae}</p>
      </div>
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
