import Results from "./components/Results";

type HomeProps = {
  searchParams: {
    limit: number;
    offset: number;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const limit = searchParams.limit || 151;
  const offset = searchParams.offset || 0;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    {
      next: { revalidate: 0 },
    }
  );
  const data = await res.json();
  const results = data.results;

  const pokemons = await Promise.all(
    results.map(async (pokemon: any) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    })
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return (
    <div>
      <Results pokemons={pokemons} />
    </div>
  );
}
