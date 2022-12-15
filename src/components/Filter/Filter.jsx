import React, { useState } from "react";
import ReactSearchBox from "react-search-box";
import "./styles.scss";
import Heading from "./Heading";
import FilterByButton from "./FilterByButton";
import SortByButton from "./SortByButton";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import Searchbar from "./Searchbar";
import { districts } from "../../data/districts";

export default function Filter() {
  const [buttonSelected, setButtonSelected] = useState(null);
  const [searchSelected, setSearchSelected] = useState(false);

  let handleFilterByClick = () => {
    if (buttonSelected === "filterBy") {
      setButtonSelected(null);
    } else {
      setButtonSelected("filterBy");
    }
  };

  let handleSortByClick = () => {
    if (buttonSelected === "sortBy") {
      setButtonSelected(null);
    } else {
      setButtonSelected("sortBy");
    }
  };
  return (
    <div className="filter">
      <Heading />
      <div className="filter-container">
        <div
          className={`filter-buttons-container ${
            searchSelected ? "hidden" : null
          }`}
        >
          <div>
            <FilterByButton
              enabled={buttonSelected === "filterBy" ? true : false}
              handleFilterByClick={handleFilterByClick}
            />
            <SortByButton
              enabled={buttonSelected === "sortBy" ? true : false}
              handleSortByClick={handleSortByClick}
            />
          </div>
        </div>
        <div>
          <Searchbar
            setSearchSelected={setSearchSelected}
            placeholder={"Search for a building"}
            options={districts}
          />
        </div>
      </div>
      <hr />
      <div className={buttonSelected !== "filterBy" ? "hidden" : null}>
        <FilterBy />
      </div>
      <div className={buttonSelected !== "sortBy" ? "hidden" : null}>
        <SortBy />
      </div>
    </div>
  );
}
