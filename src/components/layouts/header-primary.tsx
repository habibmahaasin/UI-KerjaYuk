import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function HeaderPrimary() {
  return (
    <header className="flex justify-between items-center sticky top-0 z-10 bg-white py-4 px-4 md:px-6">
      <h1 className="text-lg font-bold text-[#F82C17]">KerjaYuk</h1>
      <Link
        href={"/notification"}
        className="text-sm hover:scale-110 transform transition-transform"
      >
        <Icon icon="f7:bell" width="24" height="24" />
        <div className="w-2 h-2 bg-[#F82C17] rounded-[100%] absolute top-0 right-1"></div>
      </Link>
    </header>
  );
}
