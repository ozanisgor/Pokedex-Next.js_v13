import Image from "next/image";
import Link from "next/link";
interface PokemonCardProps {
  name: string;
}

export function PokemonCard2({ name }: PokemonCardProps) {
  return (
    <Link
      href={name}
      className="group rounded-lg border border-transparent m-3 px-5 py-4 bg-slate-900 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-slate-800 hover:dark:border-neutral-700 hover:dark:bg-slate-950"
      key={name + "Card"}
    >
      <h2 className={`text-2xl font-semibold text-center text-gray-100`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
}
