import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import logo_mobile from "../../../public/logo-mobile.png";

export default function AvenueLogo() {
  return (
    <div className="w-11/12">
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
