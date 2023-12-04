import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

export default function AvenueLogo() {
  return (
    <div className="flex xl:w-3/4 md:w-full justify-center my-8">
      <Link href="/">
        <Image
          src={logo}
          width={1920}
          height={720}
          alt="Avenue Marble Restoration Logo"
        />
      </Link>
    </div>
  );
}
