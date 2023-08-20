import Results from "@/app/components/Results";
import { PokemonGrid } from "./components/PokemonGrid";
import { getPokemonList } from "./lib/pokemonAPI";

type HomeProps = {
  searchParams: {
    limit: number;
    offset: number;
  };
};

// async function getPokeData(limit: number, offset: number) {
//   const res = await fetch(
//     `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
//   );
//   const data = await res.json();
//   const results = data.results;

//   const pokemons = await Promise.all(
//     results.map(async (pokemon: any) => {
//       const res = await fetch(pokemon.url);
//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error("Something went wrong");
//       }
//       return data;
//     })
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return pokemons;
// }

// export const dynamic = "force-dynamic";

// export default async function Home({ searchParams }: HomeProps) {
export default async function Home() {
  // const limit = searchParams.limit || 151;
  // const offset = searchParams.offset || 0;

  // const pokemons = await getPokeData(limit, offset);

  // const pokemonList = await getPokemonList();

  return (
    <div>
      {/* <PokemonGrid /> */}
      {/* <Results pokemons={pokemons} /> */}
    </div>
  );
}
