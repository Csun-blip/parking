import React from "react";
import areas from "./areas.json";
import Card from "./Card";

function Search() {
  return (
    <div className="Container">
      {areas.map((item) => (
        <Card {...item} key={item.title} />
      ))}
    </div>
  );
}
export default Search;