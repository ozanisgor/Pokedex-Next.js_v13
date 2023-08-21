import { PokemonGrid } from "./components/PokemonGrid";
import { getPokemonList } from "@/lib/pokemonAPI";

type HomeProps = {
  searchParams: {
    limit: number;
    offset: number;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const limit = searchParams.limit || 151;
  const offset = searchParams.offset || 0;

  const pokemonList = await getPokemonList(limit, offset);

  return (
    <div>
      <PokemonGrid pokemonList={pokemonList} />
    </div>
  );
}
