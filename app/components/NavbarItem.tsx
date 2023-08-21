"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type NavbarItemParams = {
  title: string;
  param?: number;
  offset?: number;
};

export default function NavbarItem({ title, param, offset }: NavbarItemParams) {
  const searchParams = useSearchParams();
  const limit = searchParams.get("limit");

  return (
    <div>
      <Link
        href={param ? `/?limit=${param}&offset=${offset}` : `/`}
        className={`m-4 hover:text-red-600 font-semibold p-2
        ${
          param &&
          limit === param.toString() &&
          "underline underline-offset-8 decoration-4 decoration-red-500 rounded-lg"
        }
        `}
      >
        {title}
      </Link>
    </div>
  );
}
