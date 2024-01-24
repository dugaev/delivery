import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import HowItWorks from "./components/How-it-works";
import Menu from "./components/Menu";
import OrderOnline from "./components/OrderOnline";
import CallToStore from "./components/CallToStore";
import Support from "./components/Support";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-3 lg:mx-28">
        <Hero />
        <Hero2 />
        <HowItWorks />
        <Menu />
        <OrderOnline />
        <CallToStore />
        <Support />
      </main>
      <Footer />
    </>
  );
}
