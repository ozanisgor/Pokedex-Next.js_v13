"use client";
import PokemonCard from "./PokemonCard";
import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PokemonCard2 } from "./Pokemon-card";
import { getPokemonList } from "../lib/pokemonAPI";

interface PokemonGridProps {
  pokemonList: any;
}

export function PokemonGrid() {
  const [searchText, setSearchText] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  // useEffect(() => {
  //   const pokemons = getPokemonList();
  //   setPokemonList(pokemons);
  // }, []);

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon")
  //     .then((response) => response.json())
  //     .then((json) => setPokemons(json.results));
  // }, []);

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search For Your Pokemon!</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
          <Label htmlFor="pokemonName">Pokemon Name</Label>
          <Input
            type="text"
            value={searchText}
            autoComplete="off"
            id="pokemonName"
            placeholder="Charizard, Pikachu, etc."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 py-10">
        {filteredPokemonList.map((pokemon: any) => {
          return <PokemonCard2 pokemon={pokemon} key={pokemon.name + "Card"} />;
        })}
      </div>
    </>
  );
}
