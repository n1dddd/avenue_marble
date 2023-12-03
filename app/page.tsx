import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex xl:w-3/4 md:w-full justify-center">
        <Image
          src="/hero.png"
          alt="Avenue Marble Restoration Quarry"
          width={1920}
          height={500}
          className="mt-12"
        />
      </div>
      <div className="w-9/12 xl:w-7/12 grid grid-cols-12 grid-rows-3 gap-4 mt-12">
        <div className="col-start-1 col-end-7">
          <p className="text-left text-xs 2xl:text-5xl xl:text-3xl lg:text-2xl md:text-lg sm:text-md">
            Use of natural stone in an interior space is an investment that will
            give you many years of gorgeous design. Natural stone is widely used
            for both residential and commercial designs. The luxurious beauty of
            granite and marble is charming.
          </p>
        </div>
        <div className="relative col-start-7 col-end-13">
          <Image
            src="/stone_pallette.png"
            alt="Granite, marble, and stone palette"
            fill
            layout="fit-content"
          />
        </div>
      </div>
    </main>
  );
}
