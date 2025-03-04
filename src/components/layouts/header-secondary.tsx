import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

interface HeaderSecondaryInterface {
  children?: React.ReactNode;
  href?: string;
}

export default function HeaderSecondary({
  children,
  href,
}: HeaderSecondaryInterface) {
  return (
    <header className="flex gap-4 items-center sticky top-0 z-10 bg-white py-4 px-4 md:px-6 shadow-lg">
      <Link href={href || "#"} className="text-sm">
        <Icon icon="majesticons:arrow-left" width="24" height="24" />
      </Link>
      <h6 className="text-lg font-bold text-[#F82C17]">{children}</h6>
    </header>
  );
}
