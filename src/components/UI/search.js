//it is like form so every input in form is gonna have its own piece of state
import React, { useState } from "react";

const Search = ({ getQuery }) => {

  const [text, setText] = useState("");

    //to implement onchange effect in app.js
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(e) => onChange(e.target.value)} //this will pass typing text into text line*6
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
