"use client";
import Image from "next/image";

export default function PokemonImage({
  image,
  alternateImage,
  name,
}: {
  image: string;
  alternateImage: string;
  name: string;
}) {
  return (
    <Image
      src={image || alternateImage}
      alt={`${name} image`}
      priority
      fill
      style={{ objectFit: "contain" }}
      className="mx-auto mt-5 z-0 transition-opacity opacity-0 duration-[2s]"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
    />
  );
}
