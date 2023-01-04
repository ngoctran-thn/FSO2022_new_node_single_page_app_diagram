import { useEffect, useState } from "react";

const Persons = (props) => {
  return (
    <p>
      {props.name} - {props.phone}
    </p>
  );
};

const Filter = (props) => {
  const [searchString, setSearchString] = useState("");

  const handleSearchString = (event) => {
    // console.log(event.target.value);
    const { value: currentSearchString } = event.target;
    setSearchString(currentSearchString);

    props.onFilter(currentSearchString);
  };

  return (
    <div>
      Filter shown with :{" "}
      <input value={searchString} onChange={handleSearchString} />
      <br />
    </div>
  );
};

const PersonForm = (props) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [message, setMessage] = useState("");
  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const addNameHandler = () => {
    if (props.persons.some((e) => e.name === newName)) {
      setMessage(`${newName} is already added in Phonebook`);
    } else {
      const newPersons = [...props.persons];
      newPersons.push({ name: newName, number: newNumber });
      props.setPersons(newPersons);
      props.setPersonToShow(newPersons);
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      name: <input value={newName} onChange={handleNameChange} />
      <br />
      Number: <input value={newNumber} onChange={handleNumberChange} />
      <br />
      <button type="submit" onClick={addNameHandler}>
        add
      </button>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personToShow, setPersonToShow] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/persons")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPersons(data);
        setPersonToShow(data);
      });
  }, []);

  const onFilter = (searchString) => {
    setPersonToShow(
      searchString === ""
        ? persons
        : persons.filter((p) => p.name.includes(searchString))
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilter={onFilter} />
      <h2> Add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setPersonToShow={setPersonToShow}
      />
      <h2>Numbers</h2>
      <ul>
        {personToShow.map((person) => (
          <Persons key={person.name} name={person.name} phone={person.number} />
        ))}
      </ul>
      ...
    </div>
  );
};

export default App;
