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

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const pokeIndex = ("000" + pokemon.id).slice(-3);

  const types = {
    normal: "bg-gray-500",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-500",
    grass: "bg-green-500",
    ice: "bg-cyan-500",
    fighting: "bg-red-700",
    poison: "bg-purple-700",
    ground: "bg-yellow-700",
    flying: "bg-blue-700",
    psychic: "bg-pink-700",
    bug: "bg-green-700",
    rock: "bg-yellow-700",
    ghost: "bg-purple-700",
    dragon: "bg-blue-700",
    dark: "bg-[#705848]",
    steel: "bg-gray-700",
    fairy: "bg-pink-700",
  } as Record<string, string>;

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div className="bg-slate-900 rounded pt-10 pb-2 flex flex-col justify-center items-center relative">
        <span className="absolute text-5xl text-slate-500 top-0 right-3 font-bold">
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
        <div className="flex gap-2 my-3">
          {pokemon.types.map(
            (type) =>
              type.type && (
                <span
                  key={type.type.name}
                  className={`${types[type.type.name]} py-1 px-2`}
                >
                  {type.type.name}
                </span>
              )
          )}
        </div>
        <span className="uppercase font-semibold tracking-wider text-amber-400">
          {pokemon.name}
        </span>
      </div>
    </Link>
  );
}
