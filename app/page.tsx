import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Hotels from "@/components/Hotels";
import Muelle from "@/components/Muelle";
import Tours from "@/components/Tours";
import Dining from "@/components/Dining";
import Departamentos from "@/components/Departamentos";
import Experiencias from "@/components/Experiencias";
import Destino from "@/components/Destino";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Manifesto />
      <Hotels />
      <Muelle />
      <Tours />
      <Dining />
      <Departamentos />
      <Experiencias />
      <Destino />
      <CTA />
      <Footer />
      <ScrollReveal />
    </>
  );
}
