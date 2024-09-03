import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm = ({ data, setSelectData, inputVal, setInputVal, isActive, buttonAry }) => {
  const handleChange = (e) => {
    e.preventDefault();
    // 入力値
    const input = e.target.value;

    // データの更新
    let newData = data;
    if (input === "") {
      if (isActive !== 0) {
        newData = data.filter((d) => d.hogwartsHouse === buttonAry[isActive]);
      }
    } else {
      if (isActive !== 0) {
        const newDataName = data.filter((d) => d.fullName.toLowerCase().includes(input.toLowerCase()));
        newData = newDataName.filter((d) => d.hogwartsHouse === buttonAry[isActive]);
      } else {
        newData = data.filter((d) => d.fullName.toLowerCase().includes(input.toLowerCase()));
      }
    }
    setSelectData(newData);

    // 入力値の更新
    setInputVal(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        // ref={inputRef}
        value={inputVal}
        onChange={handleChange}
      />
      <button
        className="button_submit"
        type="submit"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchForm;
