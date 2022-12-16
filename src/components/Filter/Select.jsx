import React, { useState } from "react";
import Select, { components } from "react-select";

export default function Dropdown({
  filterBy,
  setFilterBy,
  placeholder,
  options,
}) {
  const handleTypeSelect = (e) => {
    setFilterBy(e);
  };

  const colorStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused
          ? "#DBDBDB"
          : isSelected
          ? "#FFB399"
          : "white",
        color: "black",
        fontFamily: "TWK Lausanne",
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "white",
        fontFamily: "TWK Lausanne",
      };
    },
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        fontFamily: "TWK Lausanne",
        fontSize: "16px",
        fontWeight: "300",
      };
    },
  };

  const ValueContainer = ({ children, ...props }) => {
    const { getValue, hasValue } = props;
    const nbValues = getValue().length;
    if (!hasValue) {
      return (
        <components.ValueContainer {...props}>
          {children}
        </components.ValueContainer>
      );
    }
    return (
      <components.ValueContainer {...props}>
        <div>
          <span className="n-items-selected-eng">{`${nbValues} items selected`}</span>
          {/* <span className="n-items-selected-ar">
            {nbValues.toLocaleString("ar-EG") + " " + "مناطق"}
          </span> */}
        </div>
      </components.ValueContainer>
    );
  };

  const formatOptionLabel = ({ label_eng, label_ar }) => (
    <div className="select-option-container">
      <span className="select-option-eng">{label_eng}</span>
      <span className="select-option-ar">{label_ar}</span>
    </div>
  );

  return (
    <div style={{ width: "300px" }}>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={handleTypeSelect}
        isMulti
        styles={colorStyles}
        hideSelectedOptions={false}
        components={{ ValueContainer }}
        formatOptionLabel={formatOptionLabel}
        isSearchable={false}
        value={filterBy}
      />
    </div>
  );
}
