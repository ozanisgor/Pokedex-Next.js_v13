import Image from "next/image";
import Link from "next/link";

// type PokemonType = {
//   slot: number;
//   type: {
//     name: string;
//     url: string;
//   };
// };

// type Pokemon = {
//   name: string;
//   id: number;

//   sprites: {
//     other?: {
//       dream_world?: {
//         front_default?: string | null;
//       };
//     };
//   };

//   types: PokemonType[];
// };

interface PokemonCardProps {
  name: string;
}

export function PokemonCard2({ name }: PokemonCardProps) {
  // const pokeIndex = ("0000" + pokemon.id).slice(-4);
  // const types = {
  //   normal: "bg-gray-500",
  //   fire: "bg-red-500",
  //   water: "bg-blue-500",
  //   electric: "bg-yellow-500",
  //   grass: "bg-green-500",
  //   ice: "bg-cyan-500",
  //   fighting: "bg-red-700",
  //   poison: "bg-purple-700",
  //   ground: "bg-yellow-700",
  //   flying: "bg-blue-700",
  //   psychic: "bg-pink-700",
  //   bug: "bg-green-700",
  //   rock: "bg-yellow-700",
  //   ghost: "bg-purple-700",
  //   dragon: "bg-blue-700",
  //   dark: "bg-[#705848]",
  //   steel: "bg-gray-700",
  //   fairy: "bg-pink-700",
  // } as Record<string, string>;

  return (
    // <Link href={pokemon.name} key={pokemon.name + "Card"}>
    //   <div className="bg-slate-900 rounded pt-10 pb-2 flex flex-col justify-center items-center relative">
    //     <span className=" text-5xl text-slate-500 top-0 right-3 font-bold">
    //       #{pokeIndex}
    //     </span>
    //     <div className="h-[150px] w-[150px] z-0">
    //       <Image
    //         src={pokemon.sprites?.other?.dream_world?.front_default || ""}
    //         alt="pokemon image"
    //         width={150}
    //         height={150}
    //         className="h-full w-full rounded-md"
    //       />
    //     </div>
    //     <div className="flex gap-2 my-3">
    //       {pokemon.types.map(
    //         (type) =>
    //           type.type && (
    //             <span
    //               key={type.type.name}
    //               className={`${types[type.type.name]} py-1 px-2`}
    //             >
    //               {type.type.name}
    //             </span>
    //           )
    //       )}
    //     </div>
    //     <h2 className={`text-2xl font-semibold`}>
    //       {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
    //     </h2>
    //   </div>
    // </Link>
    <Link
      href={name}
      className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      key={name + "Card"}
    >
      <h2 className={`text-2xl font-semibold text-center`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
}
