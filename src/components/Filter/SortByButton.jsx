import React from "react";
import { GrDown, GrUp } from "react-icons/gr";
import { BiSortAlt2 } from "react-icons/bi";

export default function SortByButton({ enabled = true, handleSortByClick }) {
  return (
    <button
      className={enabled ? "filter-button" : "filter-button deselected"}
      onClick={() => {
        handleSortByClick();
      }}
    >
      <BiSortAlt2 style={{ fontSize: "20px" }} /> {"   "}
      Sort by {"   "}
      {enabled ? (
        <GrUp style={{ fontSize: "15px" }} />
      ) : (
        <GrDown style={{ fontSize: "15px" }} />
      )}
    </button>
  );
}
