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
              "flex flex-row xl:h-12 md:h-6 grow items-center border-r-2 border-b-2",
              {
                "bg-gradient-to-br from-slate-100 to-slate-200 to-transparent":
                  pathname === link.href,
              }
            )}
          >
            <p className="flex w-full justify-center font-bold">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
