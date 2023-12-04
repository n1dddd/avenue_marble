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

export default function FooterNavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex flex-row xl:h-8 md:h-4 grow items-center my-8",
              {
                "font-bold": pathname === link.href,
              }
            )}
          >
            <p className="flex w-full justify-center font-bold underline">
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
