import React, { useState } from "react";
import { MovieApp } from "./components/MovieApp";
import movies from "./components/MovieApp.json";

function App() {
  const [data, setData] = useState(movies);
  const [search, setSearch] = useState("");

  const dataSearch = data.filter((movie) => {
    let text1 = search.toLowerCase();
    // const filterd = text1 ? movie.Title.toLowerCase().includes(text1) : true;
    // const filterd = text1 ? movie.Catogry.toLowerCase().includes(text1) : true;
    const filterd = text1 ? movie.Year.toLowerCase().includes(text1) : true;


    return filterd;
  });

  return (
    <div>
      <input 
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
      />

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
