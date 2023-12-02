import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div style={{ position: "relative", width: "700px", height: "300px" }}>
        <Image
          src="/amr_sketch.png"
          alt="Pencil Sketch of Avenue Marble Restoration on Dupont Ave."
          fill={true}
          className="flex mt-16"
        />
      </div>
    </main>
  );
}
