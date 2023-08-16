import PokemonGrid from "./components/PokemonGrid";

type HomeProps = {
  searchParams: {
    limit: number;
    offset: number;
  };
};

export default function Home({ searchParams }: HomeProps) {
  return (
    <div>
      <PokemonGrid searchParams={searchParams} />
    </div>
  );
}
