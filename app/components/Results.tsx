type ResultsProps = {
  pokemons: pokemon[];
};

import Image from "next/image";

type pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
};

export default function Results({ pokemons }: ResultsProps) {
  return (
    <div>
      {pokemons.map((pokemon: pokemon) => (
        <div key={pokemon.name}>
          <h2>{pokemon.name}</h2>
          <Image
            src={pokemon.sprites.front_default}
            alt="pokemon image"
            width={50}
            height={50}
          />
        </div>
      ))}
    </div>
  );
}
