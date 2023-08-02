"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type NavbarItemParams = {
  title: string;
  param: number;
};

export default function NavbarItem({ title, param }: NavbarItemParams) {
  const searchParams = useSearchParams();
  const limit = searchParams.get("limit");
  return (
    <div>
      <h1>
        <Link
          href={`/pokemon?limit=${param}&offset=0`}
          className={`m-4 hover:text-red-600 font-semibold p-2 ${
            limit &&
            limit === param.toString() &&
            "underline underline-offset-8 decoration-4 decoration-red-500 rounded-lg"
          }`}
        >
          {title}
        </Link>
      </h1>
    </div>
  );
}
