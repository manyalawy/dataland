import React from "react";
import Select from "./Select";
import { districts } from "../../data/districts";

export default function FilterBy() {
  return (
    <div className="filter-by-container">
      <div>
        <div className="filter-label">
          <span className="filter-label-eng">District</span>
          <span className="filter-label-ar">منطقة</span>
        </div>
        <Select options={districts} placeholder={"Choose district"} />
      </div>
      <div>
        <div className="filter-label">
          <span className="filter-label-eng">Date of Construction</span>
          <span className="filter-label-ar">تاريخ البناء</span>
        </div>
        <Select options={districts} placeholder={"Choose date"} />
      </div>
      <div>
        <div className="filter-label">
          <span className="filter-label-eng">Architect</span>
          <span className="filter-label-ar">المعماري</span>
        </div>
        <Select options={districts} placeholder={"Choose architect"} />
      </div>
    </div>
  );
}
