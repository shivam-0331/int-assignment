import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./components/searchBar";
import { useEffect, useState } from "react";
import { fetchData } from "./actions/action";
import TableComponent from "./components/Table";

const App = () => {
  const { loading, data } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [updatedData, setUpdatedData] = useState(data);

  useEffect(() => {
    setUpdatedData(data);
  }, [data]);

  const handleChange = (e) => {
    console.log("Handle Change called");
    const value = e.target.value;
    setSearchValue(value);
    if (value.length % 2 === 0) {
      const updatedData = data.filter((country) =>
        country.name.toLowerCase().includes(value.toLowerCase())
      );
      setUpdatedData(updatedData);
    }
  };

  const handleDropDownChange = (e) => {
    console.log("Handle dropdown called");
    const value = e.target.value;
    setSelectedOption(value);
    let populationCount = 10000000;
    if (value === "1M") {
      populationCount = 1000000;
    } else if (value === "5M") {
      populationCount = 5000000;
    }

    const updatedData = data.filter(
      (country) => country.population < populationCount
    );
    value !== "" ? setUpdatedData(updatedData) : setUpdatedData(data);
  };

  const handleClick = () => {
    dispatch(fetchData());
  };

  const handleClear = () => {
    setSearchValue("");
    setSelectedOption("");
    setUpdatedData(data);
  };

  return (
    <main className="table-container">
      <h3>Countries Info</h3>
      <SearchBar
        value={searchValue}
        handleChange={handleChange}
        selecctedOption={selectedOption}
        handleDropDownChange={handleDropDownChange}
        handleClick={handleClick}
        handleClear={handleClear}
      />
      <TableComponent data={updatedData} loading={loading} />
    </main>
  );
};

export default App;
