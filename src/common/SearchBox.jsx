import { useState } from "react";
import { Search } from "@mui/icons-material";
const SearchBox = ({ words, setWord, label }) => {
  const [searchInput, setSearchInput] = useState("");
  const changeHandler = (e) => {
    setSearchInput(e.target.value);
    words.filter((word) => word.include(searchInput));
    setWord(words);
  };
  return (
    <div className="bg-secondary w-full border-spacing-1 px-8 py-2 rounded-md hover:opacity-90 ">
      <Search className="text-textSecondary ml-2" />
      <input
        onChange={changeHandler}
        value={searchInput}
        type="text"
        className="outline-none text-sm text-textPrimary bg-secondary py-3 "
        placeholder={`جستوجو در ${label}`}
      />
    </div>
  );
};

export default SearchBox;
