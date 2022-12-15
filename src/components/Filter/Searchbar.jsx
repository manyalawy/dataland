import React, { useState } from "react";
import { components } from "react-select";
import AsyncSelect from "react-select/async";
import { BsSearch } from "react-icons/bs";

export default function Searchbar({ placeholder, options, setSearchSelected }) {
  const [selected, setSelected] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const handleTypeSelect = (e) => {
    setSelected(e);
  };

  const colorStyles = {
    control: (styles, state) => {
      return {
        ...styles,
        background: "#bdc1be",
        border: 0,
        boxShadow: "none",
      };
    },
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
    placeholder: (styles) => {
      return {
        ...styles,
        fontFamily: "TWK Lausanne",
        fontWeight: "300",
      };
    },
    input: (styles) => {
      return {
        ...styles,
        fontFamily: "TWK Lausanne",
        fontWeight: "300",
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        background: "#bdc1be",
        shadow: "none",
      };
    },
  };

  const formatOptionLabel = ({ label_eng, label_ar }) => (
    <div className="select-option-container">
      <span className="select-option-eng">{label_eng}</span>
      <span className="select-option-ar">{label_ar}</span>
    </div>
  );

  const NoOptionsMessage = ({ children, ...props }) => (
    <components.NoOptionsMessage {...props}>{null}</components.NoOptionsMessage>
  );

  return (
    <div style={isSelected ? { width: "600px" } : null}>
      <AsyncSelect
        cacheOptions
        placeholder={placeholder}
        loadOptions={options}
        onChange={handleTypeSelect}
        styles={colorStyles}
        hideSelectedOptions={false}
        formatOptionLabel={formatOptionLabel}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        noOptionsMessage={() => null}
        onFocus={() => {
          setSearchSelected(true);
          setIsSelected(true);
        }}
        onBlur={() => {
          setSearchSelected(false);
          setIsSelected(false);
        }}
        openMenuOnClick={false}
      />
    </div>
  );
}
