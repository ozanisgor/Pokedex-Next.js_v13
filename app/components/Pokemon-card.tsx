import Image from "next/image";
import Link from "next/link";

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

  // Other properties...

  sprites: {
    other?: {
      dream_world?: {
        front_default?: string | null;
      };
    };
  };

  types: PokemonType[];
};

// pikachu, -> localhost:3000/pikachu

// interface PokemonCardProps {
//   name: string;
// }

// <PokemonCard name="pikachu" />

export function PokemonCard2({ pokemon }: { pokemon: Pokemon }) {
  const pokeIndex = ("0000" + pokemon.id).slice(-4);
  return (
    <Link href={pokemon.name} key={pokemon.name + "Card"}>
      <div className="bg-slate-900 rounded pt-10 pb-2 flex flex-col justify-center items-center relative">
        <span className=" text-5xl text-slate-500 top-0 right-3 font-bold">
          #{pokeIndex}
        </span>
        <div className="h-[150px] w-[150px] z-0">
          <Image
            src={pokemon.sprites?.other?.dream_world?.front_default || ""}
            alt="pokemon image"
            width={150}
            height={150}
            className="h-full w-full rounded-md"
          />
        </div>
        <h2 className={`text-2xl font-semibold`}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h2>
      </div>
    </Link>
  );
}
