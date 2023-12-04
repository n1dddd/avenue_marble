"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
  { name: "Services", href: "/services" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex flex-row xl:h-12 md:h-6 grow items-center mx-2 border-r-2 border-b-2 border-emerald-900 bg-emerald-900 text-white",
              {
                "bg-gradient-to-br from-emerald-950 to-emerald-800 to-transparent font-bold":
                  pathname === link.href,
              }
            )}
          >
            <p className="flex w-full justify-center ">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
