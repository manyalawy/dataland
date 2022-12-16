import React, { useState } from "react";
import "./styles.scss";
import Heading from "./Heading";
import FilterByButton from "./FilterByButton";
import SortByButton from "./SortByButton";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import Searchbar from "./Searchbar";
import FilterChip from "./FilterChip";

export default function Filter() {
  const [buttonSelected, setButtonSelected] = useState(null);
  const [searchSelected, setSearchSelected] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [districts, setDistricts] = useState([]);
  const [dates, setDates] = useState([]);
  const [architects, setArchitects] = useState([]);

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
        {/* <div>
          <Searchbar
            setSearchSelected={setSearchSelected}
            placeholder={"Search for a building"}
            options={districts}
          />
        </div> */}
      </div>
      <hr />
      <div className={buttonSelected !== "filterBy" ? "hidden" : null}>
        <FilterBy
          districts={districts}
          setDistricts={setDistricts}
          dates={dates}
          setDates={setDates}
          architects={architects}
          setArchitects={setArchitects}
        />
      </div>
      <div className={buttonSelected !== "sortBy" ? "hidden" : null}>
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="chips-container">
        {sortBy ? (
          <FilterChip
            chipTitle={"Sort by"}
            label_eng={sortBy.label_eng}
            label_ar={sortBy.label_ar}
            setSortBy={setSortBy}
            value={sortBy.value}
          />
        ) : null}
        {districts.map((item) => (
          <FilterChip
            chipTitle={"Filter by"}
            label_eng={item.label_eng}
            label_ar={item.label_ar}
            setFilterBy={setDistricts}
            filterBy={districts}
            value={item.value}
          />
        ))}
        {dates.map((item) => (
          <FilterChip
            chipTitle={"Filter by"}
            label_eng={item.label_eng}
            label_ar={item.label_ar}
            setFilterBy={setDates}
            filterBy={dates}
            value={item.value}
          />
        ))}
        {architects.map((item) => (
          <FilterChip
            chipTitle={"Filter by"}
            label_eng={item.label_eng}
            label_ar={item.label_ar}
            setFilterBy={setArchitects}
            filterBy={architects}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
}
