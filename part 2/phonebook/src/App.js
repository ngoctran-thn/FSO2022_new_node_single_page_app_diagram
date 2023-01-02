import { useState } from "react";

const Numbers = (props) => {
  return <p>{props.name} - {props.phone}</p>;
};
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchString, setSearchString] = useState("");
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
    setNewNumber("");
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
  const handleSearchString = (event) => {
    // console.log(event.target.value);
    const {value:currentSearchString} = event.target
    setSearchString(currentSearchString);
  };
  const personToShow = 
  searchString === ""
  ? persons
  : persons.filter(p => p.name.includes(searchString))

  return (
    <div>
      <h2>Phonebook</h2>
      Filter shown with :{" "}
      <input value={searchString} onChange={handleSearchString} />
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
        {personToShow.map((person) => (
          <Numbers key={person.name} name={person.name} phone={person.number} />
        ))}
      </ul>
      ...
    </div>
  );
};

export default App;
