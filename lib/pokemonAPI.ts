const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonList(limit: number, offset: number) {
  const res = await fetch(
    `${POKEMON_API}pokemon?limit=${limit}&offset=${offset}`
  );
  const data = await res.json();
  return data.results;
}
