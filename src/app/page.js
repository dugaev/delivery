import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import HowItWorks from "./components/How-it-works";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main className="mx-28">
      <Header />
      <Hero />
      <Hero2 />
      <HowItWorks />
      <Menu />
    </main>
  );
}
