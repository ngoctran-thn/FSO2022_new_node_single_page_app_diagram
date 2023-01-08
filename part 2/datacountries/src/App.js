import { useEffect, useState } from "react";

const Country = (props) => {
  return (
    <div>
      <p> {props.name} </p>
    </div>
  );
};

const Filter = (props) => {
  const [searchString, setSearchString] = useState("");
  const handleSearchString = (event) => {
    const { value: currentSearchString } = event.target;
    setSearchString(currentSearchString);
    props.onFilter(currentSearchString);
  };

  return (
    <div>
      Find countries <br />{" "}
      <input value={searchString} onChange={handleSearchString} />
    </div>
  );
};
function App() {
  const [countries, setContries] = useState([]);
  const [countriesToshow, setCountriesToShow] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContries(data);
        setCountriesToShow(data);
      });
  }, []);

  console.log(countries);

  const onFilter = (searchString) => {
    setQuery(searchString);
    setCountriesToShow(
      searchString === ""
        ? countries
        : countries.filter((c) => c.name.common.includes(searchString))
    );
  };
  return (
    <div>
      <Filter onFilter={onFilter} />
      <div>
        {countriesToshow.length > 10 && query != "" ? (
          <div> Too many matches, specify another filter </div>
        ) : (
          countriesToshow.map((c) => (
            <Country key={c.capital} name={c.name.common} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
