export interface Pokemon {
  id: string;
  title: string;
  subtitle: string;
  img: string;
}

export const pokemons: Pokemon[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
  (id) => ({
    id: `${id}`,
    title: "Pokemon name",
    subtitle: "Pokemon desc",
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
  })
);
