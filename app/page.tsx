import Image from "next/image";
import hero from "../public/hero.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex xl:w-3/4 md:w-full justify-center">
        <Image
          src={hero}
          alt="Avenue Marble Restoration Hero"
          width={1920}
          height={500}
          className="mt-6"
          placeholder="blur"
        />
      </div>
      <div className="w-11/12 md:w-9/12 grid grid-cols-12 auto-rows-auto gap-y-8 my-12">
        <hr className="col-start-1 col-end-13" />
        <div className="col-start-1 col-end-7">
          <p className="text-left text-sm 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg sm:text-sm font-light">
            Avenue Marble Restoration Inc. specializes in all types of stone
            restoration services, providing you with high quality tile repair,
            stone sealing, grout cleaning, marble restoration, marble floor
            restoration, marble cleaning, diamond grinding, diamond polishing
            and any other type of marble care.
          </p>
        </div>
        <div className="relative col-start-8 col-end-13">
          <Image
            src="/man_polishing_floor.png"
            alt="Man polishing stone floor"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <hr className="col-start-1 col-end-13" />
        <div className="relative col-start-1 col-end-7">
          <Image
            src="/porousstone.jpeg"
            alt="Close up image of porous stone"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-start-8 col-end-13">
          <p className="text-left text-sm 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg sm:text-md font-light">
            Stone surface is porous and therefore sensitive towards stains,
            acids, hard wear and even direct sunbeams. Cleaning marble floors
            requires a gentle and careful approach. Apart from gentle daily
            care, marble floors needs preventive stone floor restoration
            methods. Marble restoration includes marble polishing, diamond
            grinding, sealing and ground cleaning. Stone repair will also
            protect your marble floor or any other stone tiles from all the
            hazards.
          </p>
        </div>
        <hr className="col-start-1 col-end-13" />
        <div className="col-start-1 col-end-7">
          <p className="text-left text-sm 2xl:text-3xl xl:text-2xl lg:text-1xl md:text-lg sm:text-md font-light">
            The use of natural stone in an interior space is an investment that
            will give you many years of gorgeous design. Natural stone is widely
            used for both residential and commercial designs. The luxurious
            beauty of granite and marble is charming.
          </p>
        </div>
        <div className="relative col-start-8 col-end-13">
          <Image
            src="/stone_pallette.png"
            alt="Granite, marble, and stone palette"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <hr className="col-start-1 col-end-13" />
      </div>
    </main>
  );
}
