import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({
  placeholder,
  handleChange
}: {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
