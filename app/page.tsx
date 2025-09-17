import { Header } from "@/components/custom/Header";
import HeroBackground from "@/components/custom/HeroBackground";

export default function Home() {
  return (
    <>
      <main className={`relative w-full`}>
        <HeroBackground
          className={`absolute top-0 right-0 left-0 h-screen w-full`}
        />
        <Header />
        <section className={`h-screen w-full`}></section>
        <section className={`h-screen w-full`}></section>
      </main>
    </>
  );
}
