import React from "react";
import Select from "./Select";
import { districts_data } from "../../data/districts";

export default function FilterBy({
  districts,
  setDistricts,
  dates,
  setDates,
  architects,
  setArchitects,
}) {
  return (
    <div className="filter-by-container">
      <div>
        <div className="filter-label">
          <span className="filter-label-eng">District</span>
          <span className="filter-label-ar">منطقة</span>
        </div>
        <Select
          filterBy={districts}
          setFilterBy={setDistricts}
          options={districts_data}
          placeholder={"Choose district"}
        />
      </div>
      <div>
        <div className="filter-label">
          <span className="filter-label-eng">Date of Construction</span>
          <span className="filter-label-ar">تاريخ البناء</span>
        </div>
        <Select
          filterBy={dates}
          setFilterBy={setDates}
          options={districts_data}
          placeholder={"Choose date"}
        />
      </div>
      <div>
        <div className="filter-label">
          <span className="filter-label-eng">Architect</span>
          <span className="filter-label-ar">المعماري</span>
        </div>
        <Select
          filterBy={architects}
          setFilterBy={setArchitects}
          options={districts_data}
          placeholder={"Choose architect"}
        />
      </div>
    </div>
  );
}
