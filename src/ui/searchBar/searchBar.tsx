// import { useState } from "react";
import type { FormEvent } from "react";
import type { SearchBarProps } from "./searchBar.types";
import { Input } from "./searchBar.styles";

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
      <Input title="search pokemons" value={value} onInput={handleOnChange} />
      {/* <button type="button" onClick={onClear}>
        clear
      </button> */}
    </form>
  );
};
