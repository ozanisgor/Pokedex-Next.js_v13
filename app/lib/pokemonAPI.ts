const POKEMON_API = "https://pokeapi.co/api/v2/";

// getPokemonList -> Get the first 151 pokemon
export async function getPokemonList() {
  const res = await fetch(`${POKEMON_API}pokemon?limit=151&offset=0`);
  const data = await res.json();
  const results = data.results;

  const pokemons = await Promise.all(
    results.map(async (pokemon: any) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      return data;
    })
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return pokemons;
}

// getPokemon -> given a string 'pikachu', get the information of pikachu
