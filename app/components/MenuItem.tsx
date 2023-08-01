import Link from "next/link";

type MenuItemProps = {
  title: string;
  address: string;
  Icon: any;
};

export default function MenuItem({ title, address, Icon }: MenuItemProps) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-red-600">
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline text-sm my-2">{title}</p>
      </Link>
    </div>
  );
}
