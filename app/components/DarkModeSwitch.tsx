"use client";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  const currrentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted &&
        (currrentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-red-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            className="text-xl cursor-pointer hover:text-red-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}
