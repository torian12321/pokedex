import { useState } from "react";
import { SearchBar } from "./ui/searchBar";
import { Grid } from "./ui/grid";
import { pokemons } from "./pokemons";
import "./App.css";

function App() {
  const [query, setQuery] = useState<string>("");
  const queriedPokemons = pokemons.filter((pk) => pk.name.includes(query));

  return (
    <>
      <SearchBar value={query} onChange={setQuery} />
      <Grid pokemons={queriedPokemons} />
    </>
  );
}

export default App;
