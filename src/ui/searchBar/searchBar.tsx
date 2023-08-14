import { useState } from "react";

export const SearchBar = () => {
  const [value, setValue] = useState<string>("");

  const onInput = (e: any) => setValue(e.target.value);

  const onClear = () => {
    setValue("");
  };

  return (
    <>
      <form onSubmit={onClear}>
        <input value={value} onInput={onInput} />
        <button type="button" onClick={onClear}>
          clear
        </button>
      </form>
    </>
  );
};
