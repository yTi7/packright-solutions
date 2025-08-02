import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-[500px] font-mono">
        <Image
          className="w-full"
          src="/logo-dark.svg"
          alt="Packright Solutions Logo"
          width={180}
          height={38}
          priority
        />
        <p className={`font-mono tracking-tighter text-justify text-xl`}>
          All the right packaging solutions for your business at one place.
        </p>
        <ul className="list-inside list-disc text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">In development</li>
          <li className="tracking-[-.01em]">
            Contact: <br />
            <a href="tel:+919989425650" className={`underline`}>
              +91 99894-25650
            </a>
            ,{" "}
            <a href="mailto:direct@packright.solutions" className={`underline`}>
              direct@packright.solutions
            </a>
            <br />
            <a href="tel:+918639037338" className={`underline`}>
              +91 86390-37338
            </a>
            ,{" "}
            <a href="mailto:sales@packright.solutions" className={`underline`}>
              sales@packright.solutions
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
