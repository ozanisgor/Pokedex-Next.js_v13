import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="">
        <Link href={"/"}>
          <h2 className="text-2xl font-bold bg-red-600 py-1 px-2 rounded-lg mr-1 text-white">
            Pokedex
          </h2>
        </Link>
      </div>
    </div>
  );
}
