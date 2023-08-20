import { useState } from "react";
import { SearchBar } from "./ui/searchBar";
import { Grid } from "./ui/grid";
import { useGetPokemon } from "./useGetPokemons";
import "./App.css";

function App() {
  const { data: pokemons, isLoading } = useGetPokemon();
  const [query, setQuery] = useState<string>("");
  const queriedPokemons = pokemons.filter((pk) => pk.name.includes(query));

  return !isLoading ? (
    <>
      <SearchBar value={query} onChange={setQuery} />
      <Grid pokemons={queriedPokemons} />
    </>
  ) : null;
}

export default App;
