import MainLogo from "@/components/main/MainLogo";
import Services from "@/components/services/Services";
import EcoBox from "@/components/eco/EcoBox";
import Companies from "@/components/companies/Companies";
import Statistics from "@/components/statistics/Statistics";
import Contact from "@/components/contact/Contact";
import WavesOpacity from "@/components/divider/WavesOpacity";

export default function Home() {
  return (
    <>
      <main className="w-full rotate   ">
        <MainLogo />
        <WavesOpacity color={"#1A5990"} />
        <Services />
        <EcoBox />
        <Companies />
        <Statistics />
        <WavesOpacity color={"#edf0f5"} />
        <Contact />
      </main>
      <footer></footer>
    </>
  );
}
