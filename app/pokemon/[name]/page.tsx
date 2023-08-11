import Image from "next/image";

type PageParams = {
  params: {
    name: string;
  };
};

type PokemonStat = {
  stat: {
    name: string;
  };
  base_stat: number;
};

type Pokemon = {
  name: string;
  id: number;

  sprites?: {
    other?: {
      dream_world?: {
        front_default?: string | null;
      };
    };
  };
  stats: Array<PokemonStat>;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
};

export default async function Pokemon({ params }: PageParams) {
  const pokeName = params.name;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  const pokeDetails: Pokemon = await response.json();
  const pokeIndex = ("000" + pokeDetails.id).slice(-3);
  const stats = pokeDetails.stats?.map((stat) => {
    return {
      name: stat.stat.name,
      value: stat.base_stat,
    };
  });
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

  // calculate % of the base value
  const hp =
    stats &&
    Math.floor((stats.find((stat) => stat.name === "hp")?.value! * 100) / 255);
  const attack = Math.floor(
    (stats.find((stat) => stat.name === "attack")?.value! * 100) / 255
  );
  const defense = Math.floor(
    (stats.find((stat) => stat.name === "defense")?.value! * 100) / 255
  );
  const spAttack = Math.floor(
    (stats.find((stat) => stat.name === "special-attack")?.value! * 100) / 255
  );
  const spDefense = Math.floor(
    (stats.find((stat) => stat.name === "special-defense")?.value! * 100) / 255
  );
  const speed = Math.floor(
    (stats.find((stat) => stat.name === "speed")?.value! * 100) / 255
  );

  return (
    <div>
      <div className="w-screen flex items-center justify-center uppercase bg-slate-900 h-32 text-amber-500 text-5xl font-bold text-center">
        {pokeDetails.name}
      </div>
      <div className="flex  flex-col justify-center items-center">
        <span className="absolute text-[300px] font-bold text-slate-500 mt-5">
          #{pokeIndex}
        </span>
        <Image
          src={pokeDetails.sprites?.other?.dream_world?.front_default || ""}
          width={200}
          height={200}
          alt={`${pokeDetails.name} image`}
          className="mx-auto mt-5 z-0"
        />
        <div className="flex gap-2 my-3">
          {pokeDetails.types.map(
            (type) =>
              type.type && (
                <span
                  key={type.type.name}
                  className={`${
                    types[type.type.name]
                  } py-1 px-2 z-0 rounded-full text-lg`}
                >
                  {type.type.name}
                </span>
              )
          )}
        </div>
      </div>
      <div className="flex justify-center items-center max-w-xl mx-auto gap-5 mt-5">
        <div>
          <Image
            src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeDetails.id}.gif?raw=true`}
            width={200}
            height={200}
            alt={`${pokeDetails.name} image`}
            className="max-w-[50px]"
          />
        </div>

        <div className="w-full pb-10">
          <p>
            HP:
            <span className="ml-2 font-bold">
              {stats.find((stat) => stat.name === "hp")?.value}
            </span>
          </p>
          <div className="mb-6 h-2 bg-neutral-200 dark:bg-neutral-600 rounded-r-full">
            <div
              className={`h-2 rounded-r-full bg-[#FF5959] `}
              style={{ width: `${hp}%` }}
            ></div>
          </div>
          <p>
            Attack:
            <span className="ml-2 font-bold">
              {stats.find((stat: any) => stat.name === "attack")?.value}
            </span>
          </p>
          <div className="mb-6 h-2 bg-neutral-200 dark:bg-neutral-600 rounded-r-full">
            <div
              className={`h-2 rounded-r-full bg-[#F5AC78]`}
              style={{ width: `${attack}%` }}
            ></div>
          </div>
          <p>
            Defense:
            <span className="ml-2 font-bold">
              {stats.find((stat: any) => stat.name === "defense")?.value}
            </span>
          </p>
          <div className="mb-6 h-2 bg-neutral-200 dark:bg-neutral-600 rounded-r-full">
            <div
              className={`h-2 rounded-r-full bg-[#FAE078]`}
              style={{ width: `${defense}%` }}
            ></div>
          </div>
          <p>
            Sp. Atk:
            <span className="ml-2 font-bold">
              {stats.find((stat: any) => stat.name === "special-attack")?.value}
            </span>
          </p>
          <div className="mb-6 h-2 bg-neutral-200 dark:bg-neutral-600 rounded-r-full">
            <div
              className={`h-2 rounded-r-full bg-[#9DB7F5]`}
              style={{ width: `${spAttack}%` }}
            ></div>
          </div>
          <p>
            Sp. Def:
            <span className="ml-2 font-bold">
              {
                stats.find((stat: any) => stat.name === "special-defense")
                  ?.value
              }
            </span>
          </p>
          <div className="h-2 mb-6 bg-neutral-200 dark:bg-neutral-600 rounded-r-full">
            <div
              className={`h-2 rounded-r-full bg-[#A7DB8D]`}
              style={{ width: `${spDefense}%` }}
            ></div>
          </div>
          <p>
            Speed:
            <span className="ml-2 font-bold">
              {stats.find((stat: any) => stat.name === "speed")?.value}
            </span>
          </p>
          <div className="h-2 bg-neutral-200 dark:bg-neutral-600 rounded-r-full">
            <div
              className={`h-2 rounded-r-full bg-[#FA92B2]`}
              style={{ width: `${speed}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
