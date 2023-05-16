import React, { useState } from "react";
import movies from "./components/MovieApp.json";
import { MovieApp } from "./components/MovieApp";
import "./App.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

function App() {
  const [data, setData] = useState(movies);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleCategoryClick = (cat: string) => {
    setCategory(cat.toLowerCase());
  };

  const dataSearch = data.filter((movie) => {
    const text1 = search.toLowerCase();
    const text2 = category;

    const filteredByText = text1
      ? movie.Title.toLowerCase().includes(text1)
      : true;

    const filteredByCategory = text2
      ? movie.Catogry.toLowerCase().includes(text2)
      : true;

    return filteredByText && filteredByCategory;
  });

  return (
    <div>
      <nav className="mainhead1">
        <button onClick={() => handleCategoryClick("Funny")}>Funny</button>
        <button onClick={() => handleCategoryClick("Horror")}>Horror</button>
        <button onClick={() => handleCategoryClick("Action")}>Action</button>
      </nav>
      <br />

      <div className="srchdiv">
        <input
          style={{ backgroundColor: "sky", padding: 10, display: "flex" }}
          type="text"
          placeholder=" Enter User Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="main">
        {dataSearch.map((element, index) => {
          return (
            <MovieApp
              key={index}
              year={element.Year}
              title={element.Title}
              type={element.Catogry}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
