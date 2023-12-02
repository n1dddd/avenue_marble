import Image from "next/image";
import Link from "next/link";

export default function AvenueLogo() {
  return (
    <div className="flex xl:w-3/4 justify-center md:w-full mt-8">
      <Link href="/">
        <Image
          src="/logo.png"
          width={1920}
          height={720}
          alt="Avenue Marble Restoration Logo"
        />
      </Link>
    </div>
  );
}
