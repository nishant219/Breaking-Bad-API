import React from "react";
import CharacterItem from "./characterItem";
import Spinner from "../UI/spinner";

const CharacterGrid = ({ items, isLoading }) => {
  //if data is loading then show spinnig logo
  //and once data is loaded then map through them (each item) as a cards
  return isLoading ? 
    < Spinner />
   : 
    <section className="cards">
      {items.map((item) => (
  //      <h1> {item.name} </h1>
      <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  
};

export default CharacterGrid;
