// import { useState } from "react";
import type { FormEvent } from "react";
import type { SearchBarProps } from "./searchBar.types";

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  // const [value, setValue] = useState<string>("");

  const handleOnChange = (e: FormEvent<HTMLInputElement>) =>
    onChange(e.currentTarget.value);

  const handelOnSubmit = () => {
    onChange(value);
  };
  // const onClear = () => {
  //   setValue("");
  // };

  return (
    <form onSubmit={handelOnSubmit}>
      <input value={value} onInput={handleOnChange} />
      {/* <button type="button" onClick={onClear}>
        clear
      </button> */}
    </form>
  );
};
