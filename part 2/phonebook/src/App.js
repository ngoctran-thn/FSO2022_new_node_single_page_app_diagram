import { useState } from "react";

const Numbers = (props) => {
  return <p>{props.name} - {props.phone}</p>;
};
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState("");
  const [messgae, setMessage] = useState("");

  const addNameHandler = () => {
    if (persons.some((e) => e.name === newName)) {
      setMessage(`${newName} is already added in Phonebook`);
    } else {
      const newPersons = [...persons];
      newPersons.push({ name: newName, number: newNumber });
      setPersons(newPersons);
    }
    setNewName("");
  };

  console.log(persons);

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const handleShowAllChange = (event) => {
    // console.log(event.target.value);
    setShowAll(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      Filter shown with :{" "}
      <input value={showAll} onChange={handleShowAllChange} />
      <br />
      <h2> Add a new</h2>
      name: <input value={newName} onChange={handleNameChange} />
      <br />
      Number: <input value={newNumber} onChange={handleNumberChange} />
      <br />
      <button type="submit" onClick={addNameHandler}>
        add
      </button>
      <div>
        <p>{messgae}</p>
      </div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Numbers key={person.name} name={person.name} phone={person.number} />
        ))}
      </ul>
      ...
    </div>
  );
};

export default App;
