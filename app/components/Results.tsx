"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
  console.log(pokemons, "pokemons in results*********");

  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!searchInput) return;
    router.push(`/search?word=${searchInput}`);
    setSearchInput("");
  };

  // filter the text
  const searchFilter = (pokemons: Pokemon[]) => {
    return pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };
  // save the filtered array of objects
  const filteredPokemons = searchFilter(pokemons);

  // show the filtered array to user

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-6xl mx-auto justify-between items-center px-5"
      >
        <input
          value={searchInput}
          onChange={(e: any) => {
            setSearchInput(e.target.value);
          }}
          type="text"
          placeholder="Search pokemons..."
          className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        />
        <button
          type="submit"
          className="text-amber-500 disabled:text-gray-400 bg-slate-900 rounded-md py-1 px-2 font-semibold hover:bg-slate-800"
          disabled={!searchInput}
        >
          Search
        </button>
      </form>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 py-10">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
