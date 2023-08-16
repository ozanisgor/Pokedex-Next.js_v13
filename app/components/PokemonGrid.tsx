import Results from "@/app/components/Results";

type HomeProps = {
  searchParams: {
    limit: number;
    offset: number;
  };
};

async function getPokeData(limit: number, offset: number) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
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

export default async function PokemonGrid({ searchParams }: HomeProps) {
  const limit = searchParams.limit || 151;
  const offset = searchParams.offset || 0;

  const pokemons = await getPokeData(limit, offset);

  return (
    <div>
      <Results pokemons={pokemons} />
    </div>
  );
}
