import useSWR from "swr";
import type { Pokemon } from "./types";

const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface UseGetPokemon {
  data: Pokemon[];
  isLoading: boolean;
  error: any;
}

export const useGetPokemon = (): UseGetPokemon => {
  const { data = {}, error, isLoading } = useSWR(URL, fetcher);
  const { results = [] } = data;
  const pokemons: Pokemon[] = results.map((r: Pokemon, i: number) => ({
    ...r,
    id: `${i + 1}`,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    data: pokemons,
    error,
    isLoading,
  };
};
