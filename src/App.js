import React, { useState, useEffect } from "react";
import Header from "./components/UI/Header";
import CharacterGrid from "./components/characters/characterGrid";
import Search from "./components/UI/search";
import "./App.css";
import axios from "axios";

const App = () => {
  // hook 1) useState
  // [define the state , fun to change the state] = useState(default)
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [query, setQuery] = useState(''); // 

  // hook 2) useEffect
  useEffect(() => {
    const fetchItems = async () => {
      //result = what we get back from axios
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
//whenever query is changed useEffect is fired up


  // we are taking global state in app.js & passing it into characterGrid as a prop
  //{ isLoading } value is changed when we called setIsLoading
  //getQuery will do that you put inside { }
  return (
    <div className="Container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
