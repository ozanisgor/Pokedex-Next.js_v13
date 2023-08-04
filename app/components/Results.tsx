import PokemonCard from "./PokemonCard";

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type Pokemon = {
  name: string;
  id: number;

  sprites: {
    other?: {
      dream_world?: {
        front_default?: string | null;
      };
    };
  };

  types: PokemonType[];
};

type ResultsProps = {
  pokemons: Pokemon[];
};

export default function Results({ pokemons }: ResultsProps) {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 my-10">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}
