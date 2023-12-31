import type { Metadata } from "next";
import { gothic } from "./ui/fonts";
import AvenueLogo from "./ui/components/avenue-marble-logo";
import NavBar from "./ui/navbar/navbar";
import "./globals.css";
import Footer from "./ui/components/footer/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${gothic.className} subpixel-antialiased text-almostblack grid grid-cols-12 auto-rows-auto`}
      >
        <div className="w-full md:h-full col-start-1 xl:col-end-2 col-end-13 bg-emerald-900">
          <NavBar />
        </div>
        <div className="col-start-4 xl:col-start-3 col-end-12 xl:col-end-13">
          <AvenueLogo />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
