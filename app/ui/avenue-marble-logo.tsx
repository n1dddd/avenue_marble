import Image from "next/image";
import Link from "next/link";

export default function AvenueLogo() {
  return (
    <div className="flex justify-center">
      <Link href="/">
        <Image
          src="/logo.png"
          width={1160}
          height={210}
          className="flex"
          alt="Avenue Marble Restoration Logo"
        />
      </Link>
    </div>
  );
}
