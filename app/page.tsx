import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex w-full justify-center">
        <Image
          src="/hero.png"
          alt="Avenue Marble Restoration Quarry"
          width={1920}
          height={500}
          className="w-3/4 h-auto mt-12"
        />
      </div>
    </main>
  );
}
