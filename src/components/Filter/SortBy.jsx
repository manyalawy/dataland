import React, { useState } from "react";
import { Checkbox } from "antd";

export default function SortBy({ sortBy, setSortBy }) {
  let handleCheckBoxClick = (e, label_eng, label_ar) => {
    if (e.target.checked) {
      setSortBy({
        label_eng: label_eng,
        label_ar: label_ar,
        value: e.target.value,
      });
    } else {
      setSortBy(null);
    }
  };
  return (
    <div className="sort-by-container">
      <div>
        <div className="sort-by-label">
          <p>
            <span className="sort-by-label-eng">AVAILABILITY OF</span>
            <span className="sort-by-label-ar">توافر</span>
          </p>
        </div>
        <div className="check-box-container">
          <Checkbox
            className="check-box"
            checked={sortBy?.value === "3d_model" ? true : false}
            value="3d_model"
            onClick={(e) => {
              handleCheckBoxClick(e, "3D model", "نموذج ثلاثي الأبعاد");
            }}
          >
            <p>
              <span className="check-box-label-eng">3D model</span>
              <span className="check-box-label-ar">نموذج ثلاثي الأبعاد</span>
            </p>
          </Checkbox>
          <Checkbox
            checked={sortBy?.value === "archival_source" ? true : false}
            value={"archival_source"}
            className="check-box"
            onClick={(e) => {
              handleCheckBoxClick(e, "Archival source", "مصادر أرشيفية");
            }}
          >
            <p>
              <span className="check-box-label-eng">Archival source</span>
              <span className="check-box-label-ar">مصادر أرشيفية</span>
            </p>
          </Checkbox>
        </div>
      </div>
      <div>
        <div className="sort-by-label">
          <p>
            <span className="sort-by-label-eng">ORDER</span>
            <span className="sort-by-label-ar">ترتيب</span>
          </p>
        </div>
        <div className="check-box-container">
          <Checkbox
            checked={sortBy?.value === "alphabetically" ? true : false}
            className="check-box"
            value={"alphabetically"}
            label_eng="Alphabetically"
            label_ar="أبجديا"
            onClick={(e) => {
              handleCheckBoxClick(e, "Alphabetically", "أبجديا");
            }}
          >
            <p>
              <span className="check-box-label-eng">Alphabetically</span>
              <span className="check-box-label-ar">أبجديا</span>
            </p>
          </Checkbox>
          <Checkbox
            checked={sortBy?.value === "chronologically" ? true : false}
            className="check-box"
            value={"chronologically"}
            label_eng="Chronologically"
            label_ar="زمنيا"
            onClick={(e) => {
              handleCheckBoxClick(e, "Chronologically", "زمنيا");
            }}
          >
            <p>
              <span className="check-box-label-eng">Chronologically</span>
              <span className="check-box-label-ar">زمنيا</span>
            </p>
          </Checkbox>
        </div>
      </div>
    </div>
  );
}
