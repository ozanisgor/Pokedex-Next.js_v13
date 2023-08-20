const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonList() {
  const res = await fetch(`${POKEMON_API}pokemon?limit=151&offset=0`);
  const data = await res.json();
  const results = data.results;

  //   const pokeDetails = getPokemonDetails(results);

  //   if (!res.ok) {
  //     throw new Error("Something went wrong");
  //   }

  //   return pokeDetails;
  // }

  // const getPokemonDetails = async (results: any) => {
  //   const details = await Promise.all(
  //     results.map(async (p: any) => {
  //       const response = await fetch(`${POKEMON_API}/pokemon/${p.name}`);
  //       const data = await response.json();
  //       return data;
  //     })
  //   );

  //   return details;
}

export async function getPokemon(pokeName: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  const data = await response.json();
  return data;
}

// getPokemon -> given a string 'pikachu', get the information of pikachu
