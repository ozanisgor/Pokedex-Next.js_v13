import NavbarItem from "./NavbarItem";

export default function Navigation() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-red-100 lg:text-lg p-4">
      <NavbarItem title="Kanto" param={151} offset={0} />
      <NavbarItem title="Johto" param={99} offset={152} />
      <NavbarItem title="Hoenn" param={135} offset={251} />
    </div>
  );
}
