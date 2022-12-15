import React from "react";
import { BsFilter } from "react-icons/bs";
import { GrDown, GrUp } from "react-icons/gr";

export default function FilterByButton({
  enabled = true,
  handleFilterByClick,
}) {
  return (
    <button
      className={enabled ? "filter-button" : "filter-button deselected"}
      onClick={() => {
        handleFilterByClick();
      }}
    >
      <BsFilter style={{ fontSize: "20px" }} /> {"   "}
      Filter by {"   "}
      {enabled ? (
        <GrUp style={{ fontSize: "15px" }} />
      ) : (
        <GrDown style={{ fontSize: "15px" }} />
      )}
    </button>
  );
}
