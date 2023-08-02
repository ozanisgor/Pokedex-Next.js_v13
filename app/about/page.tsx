export default function About() {
  return (
    <div className="max-w-6xl mx-auto space-y-4 p-4">
      <h1 className="text-3xl font-medium text-red-500">About</h1>
      <p>
        This is a list of Pokémon in the order dictated by the National Pokédex,
        meaning that Pokémon from the Kanto region will appear first, followed
        by those from Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, Hisui,
        and Paldea. Each region&apos;s set of Pokémon starts with its own set of
        starter Pokémon and their evolutions, going in order of Grass, Fire,
        Water; the only exception is Unova, which begins with Victini, who is
        then followed by the starter Pokémon.
      </p>
      <p>
        The first 151 entries in this Pokédex also serve as Kanto&apos;s
        regional Pokédex. In Generation II, this Pokédex order was known as the
        &quot;Old Pokédex&quot;, with a new order that put related Pokémon near
        each other also included.
      </p>
    </div>
  );
}
