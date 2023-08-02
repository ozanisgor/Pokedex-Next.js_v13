import NavbarItem from "./NavbarItem";

export default function Navigation() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-red-100 lg:text-lg p-4">
      <NavbarItem title="Kanto" param={152} />
      <NavbarItem title="Johto" param={251} />
    </div>
  );
}
